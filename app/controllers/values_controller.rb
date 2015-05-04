class ValuesController < ApplicationController

  def index
    respond_with Value.all
    # render json: Value.all
  end

  def create
   # respond_with Value.create(post_params)
  end

  def show
  end

  def update
  end

end