class Case < ApplicationRecord
    validates :title, presence: true
    validates :image, presence: true
    validates :caption, presence: true
    belongs_to :user
end
