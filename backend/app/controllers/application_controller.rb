class ApplicationController < ActionController::API
  before_action :authenticate
  attr_reader :current_user

  def authenticate
    if request.headers["Authorization"]
      begin
        auth_header = request.headers["Authorization"]
        decoded_token = JWT.decode(token(auth_header), secret)
        payload = decoded_token.first
        user_id = payload["user_id"]
        @current_user = User.find(user_id)
      rescue => exception
        render json: { message: "Error: #{exception}" }, status: :forbidden
      end
    else
      render json: { message: "No Authorization header sent" }, status: :forbidden
    end
  end

  def token(auth_header)
    auth_header.split(" ")[1]
  end

  def secret
    secret = ENV['SECRET_KEY_BASE'] || Rails.application.secrets.secret_key_base
  end

  def create_token(payload)
    JWT.encode(payload, secret)
  end
end
