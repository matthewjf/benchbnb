class Bench < ActiveRecord::Base
  def self.in_bounds(bounds)
    lat = [bounds["northEast"]["lat"], bounds["southWest"]["lat"]]
    lng = [bounds["northEast"]["lng"], bounds["southWest"]["lng"]]

    Bench.where(lat: lat.min..lat.max,lng: lng.max..lng.min)
  end
end
