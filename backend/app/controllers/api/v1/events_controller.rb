class Api::V1::EventsController < ApplicationController
  before_action :set_event, only: %i[ show update destroy ]
  before_action :authorize_user, only: %i[ update destroy ]

  # GET /events
  def index
    @events = Event.all

    render json: @events
  end

  # GET /events/1
  def show
    render json: @event
  end

  # POST /events
# POST /events
def create
  @event = current_user.events.build(event_params)

  if @event.save
    render json: @event, status: :created, location: api_v1_event_url(@event)
  else
    render json: @event.errors, status: :unprocessable_entity
  end
end



  # PATCH/PUT /events/1
  def update
    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /events/1
  def destroy
    @event.destroy
  end

  private
  def authorize_user
    unless @event.user_id == current_user.id
      render json: { error: "Vous n'êtes pas autorisé à effectuer cette action." }, status: :forbidden
    end
  end
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def event_params
      params.require(:event).permit(:event_name, :description, :location)
    end
end
