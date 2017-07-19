class CommentsController < ApplicationController

  def create
    article = Comment.new
    article.content = params[:comment]
    article.article_id = params[:article_id]
    article.save
    redirect_to "/articles/#{params[:article_id]}"
  end



end
