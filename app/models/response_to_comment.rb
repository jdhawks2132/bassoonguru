class ResponseToComment < ApplicationRecord
  belongs_to :comment
  belongs_to :response
end
