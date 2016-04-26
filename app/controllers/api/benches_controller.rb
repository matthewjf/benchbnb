class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])
    render json: @benches
  end

  def create
    image_urls = params[:bench][:image_urls]
    @bench = Bench.new(bench_params)
    @bench.image_urls = image_urls

    if @bench.save
      render json: @bench
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  private
  def bench_params
    params.require(:bench).permit(:title, :description, :lat, :lng, :seating)
  end
end
