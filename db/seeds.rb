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
  password: 'demo_user'
)

User.create!(
  username: 'guy',
  email: 'guy@guy.com',
  password: 'guysguy',
  location: 'cool place',
  description: 'a very cool description',
  own_site_url: 'google.com'
)

5.times do User.create!(
  username: Faker::Music.chord,
  email: Faker::Music.chord,
  password: 'verymodern',
  location: Faker::Music.chord,
  description: 'a very cool description',
  own_site_url: 'google.com')
end
