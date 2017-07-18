class GamesController < ApplicationController

  def home
    @games = [["Magic 8 ball", "magic_8_ball"], ["Secret Number", "secret_number"], ["Rock Paper Scissors", "rock_paper_scissors"]]
    render :index
  end

  def index
    @games = [["Magic 8 ball", "magic_8_ball"], ["Secret Number", "secret_number"], ["Rock Paper Scissors", "rock_paper_scissors"]]
  end

  def magic_8_ball
    answers = ["yes", "no", "maybe"]
    if params[:question] != nil
      @answer = answers.sample
    end
  end

  def secret_number
    @numbers = [1,2,3,4,5,6,7,8,9,10]
  end


  def secret_number_response
    @message = params[:right_number] == params[:number]? "You are right" : "You are wrong, the secret number was #{params[:right_number]}"
  end


  def rock_paper_scissors
    @selections = ["Rock", "Paper", "Scissors"]

  end


  def rock_papper_scissors_play
    generated = params[:generated]
    selection = params[:throw]
    if (
      selection == "Rock" && generated == "Scissors" ||
      selection == "Paper" && generated == "Rock" ||
      selection == "Scissors" && generated == "Paper"
      )
      @message = "Computer throws #{generated}. You Won!"

    elsif (
      selection == "Rock" && generated == "Paper" ||
      selection == "Paper" && generated == "Scissors" ||
      selection == "Scissors" && generated == "Rock"
      )
      @message = "Computer throws #{generated}. You Lose!"
    else
      @message = "Computer throws #{generated}. Draw!"
    end


  end










end
