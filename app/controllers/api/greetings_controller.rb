class Api::GreetingsController < ApplicationController
  def random_greeting
    @random_greeting = Message.order('RANDOM()').first
    render json: { greeting: @random_greeting.content }
  end
end
