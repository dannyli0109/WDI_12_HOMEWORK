class CatsController < ApplicationController

  def index
    @cats = Cat.all

  end

  def new


  end

  def create
    cat = Cat.new
    cat.name = params[:name]
    cat.image_url = params[:image_url]
    cat.save
    redirect_to "/cats"
  end

  def show
    @cat = Cat.find(params[:id])
  end


  def edit
    @cat = Cat.find(params[:id])
  end

  def update
    cat = Cat.find(params[:id])
    cat.name = params[:name]
    cat.image_url = params[:image_url]
    cat.save
    redirect_to "/cats"
  end


  def destroy
    Cat.find(params[:id]).destroy
    redirect_to "/cats"

  end



end
