# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


titles = [
  'Wet',                # 0
  'Monster friends',    # 1
  'On the pier',        # 2
  'Golden Gate Bridge', # 3
  'Old bench',          # 4
  'Under the lights',   # 5
  'Fall park',          # 6
  'Sandy',              # 7
  'Under bridge',       # 8
  'Plain',              # 9
  'Memorial',           # 10
  'Pencil',             # 11
  'Spy',                # 12
  'Mobile',             # 13
  'Success'             # 14
]

base_url = 'http://res.cloudinary.com/dn0zhjiai/image/upload/v1461650809/'

image_urls = [
  '1_ummbqo', # 0
  '2_vjty1r', # 1
  '3_miutuh', # 2
  '4_doljrj', # 3
  '5_pn7dvp', # 4
  '6_he9ymk', # 5
  '7_bxfxyw', # 6
  '8_d5zjhi', # 7
  '9_zwun9q', # 8
  '10_oxuete', # 9
  '11_rqrvin', # 10
  '12_eu1doq', # 11
  '13_bekzij', # 12
  '14_sbno5t', # 13
  '15_lffs2y'  # 14
]

15.times do |i|
  lat = 37.7 + (rand()/10)
  lng = -122.4 - (rand()/10)
  Bench.create(
    title: titles[i],
    description: Faker::Hipster.paragraph,
    seating: rand(8) + 1,
    lat: lat,
    lng: lng,
    image_urls: [base_url + image_urls[i]]
  )
end
