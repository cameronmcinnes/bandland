# == Schema Information
#
# Table name: users
#
#  id                       :integer          not null, primary key
#  username                 :string           not null
#  password_digest          :string           not null
#  session_token            :string           not null
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#  email                    :string           not null
#  location                 :string
#  own_site_url             :string
#  description              :text
#  profile_img_file_name    :string
#  profile_img_content_type :string
#  profile_img_file_size    :integer
#  profile_img_updated_at   :datetime
#  banner_img_file_name     :string
#  banner_img_content_type  :string
#  banner_img_file_size     :integer
#  banner_img_updated_at    :datetime
#

class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_attached_file :profile_img, default_url: "missing.png"
  has_attached_file :banner_img, default_url: "missing_banner.png"
  validates_attachment_content_type :profile_img, :banner_img, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

  attr_reader :password

  has_many :albums, foreign_key: :artist_id
  has_many :collectings, foreign_key: :collector_id
  has_many :collected_albums, through: :collectings, source: :collected

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64(16)
  end

  # account low possibility of repeat session token
  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end
end
