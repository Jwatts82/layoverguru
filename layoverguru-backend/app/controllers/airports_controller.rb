class AirportsController < ApplicationController
  before_action :set_airport, only: [:show, :update, :destroy]

  # GET /airports
  def index
    @airports = Airport.all

    render json: @airports
  end

  # GET /airports/1
  def show
    render json: @airport
  end

  # POST /airports
  def create
    @airport = Airport.new(airport_params)

    if @airport.save
      render json: @airport, status: :created, location: @airport
    else
      render json: @airport.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /airports/1
  def update
    if @airport.update(airport_params)
      render json: @airport
    else
      render json: @airport.errors, status: :unprocessable_entity
    end
  end

  # DELETE /airports/1
  def destroy
    @airport.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_airport
      @airport = Airport.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def airport_params
      params.require(:airport).permit(:name, :code, :visited)
    end
end
