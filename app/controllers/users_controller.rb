class UsersController < ApplicationController
    def create #signup
          user = User.create(user_params)
          if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created 
          else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
          end
    end

    def show #who is logged in
        user = find_by(id: session[:user_id])
        if user
            render json: user 
        else
            render json: { error: "not authorized"}, status: :unauthorized
        end
    end 

    private

    def user_params
        params.permit(:name, :password, :password_confirmation)
    end
end
