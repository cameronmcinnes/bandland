# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create!(
  username: 'beloved_guest',
  email: 'guest@example.com',
  password: 'demo_user',
  description: 'i am a good guest',
  profile_img: File.open('app/assets/images/sphinx.jpg'),
  banner_img: File.open('app/assets/images/sand_banner.jpeg')
)

User.create!(
  username: 'willie',
  email: 'guy@guy.com',
  password: 'guysguy',
  location: 'cool place',
  description: 'a very cool description',
  own_site_url: 'google.com'
)

Album.destroy_all

Dir.foreach('app/assets/images/seed_covers') do |file_name|
  next if file_name == '.' or file_name == '..'
  Album.create!(
    artist_id: User.find_by(username: 'willie').id,
    title: Faker::StarWars.vehicle,
    price: rand(10),
    description: 'howdy. what a nuanced album',
    cover_img: File.open("app/assets/images/seed_covers/#{file_name}")
  )
end

Collecting.destroy_all

Album.all.each do |alb|
  Collecting.create!(
    collector_id: User.find_by(username: 'beloved_guest').id,
    collected_id: alb.id
  )
end
