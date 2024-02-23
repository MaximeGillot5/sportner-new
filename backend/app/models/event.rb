class Event < ApplicationRecord
    belongs_to :user

    validates :event_name, presence: true
    validates :description, presence: true
    validates :location, presence: true
end
