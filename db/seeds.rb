# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

25.times do |i|
  lat = 37.7 + (rand()/10)
  lng = -122.4 - (rand()/10)
  desc = i
  Bench.create(description: desc, lat: lat, lng: lng)
end
