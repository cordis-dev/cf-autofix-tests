require 'api_test'

class Test
  include ApiSupport::ApiResponse

  def initialize(operation_class, columns_from: nil, extra_data: {})
    @operation_class = operation_class
    @columns_from = columns_from
    @extra_data = extra_data
  end

  def call(_, input, ctx)
    input = GraphQL::Helpers.format_args(input)
    if @columns_from
      cols = GraphQL::Helpers.requested_columns_from_context(ctx).dig(*@columns_from)
      input.merge!(columns: cols, **@extra_data)
    end

    @operation_class.call(ctx, input) do
      success { |value| value }
      failure { |error| convert_pathway_error(error) }
    end
  rescue Pathway::Error => e
    raise convert_pathway_error(e)
  end
end
