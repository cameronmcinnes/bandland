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
  profile_img: File.open('app/assets/images/seed_covers/a3690324311_16.jpg'),
  banner_img: File.open('app/assets/images/seed_covers/a4099353330_16.jpg')
)

User.create!(
  username: 'willie',
  email: 'guy@guy.com',
  password: 'guysguy',
  location: 'cool place',
  description: 'a very cool description',
  own_site_url: 'google.com',
  profile_img: File.open('app/assets/images/missing_cover_img.png'),
  banner_img: 'https://s3.amazonaws.com/bandland-development/seeds/album_covers/20837750_111669122834416_2675294390913597440_n.jpg'
)

User.create!(
  username: 'camron',
  email: 'cam.mcinnes@gmail.com',
  password: 'verymodern',
  location: 'cool place',
  description: 'a very cool description',
  own_site_url: 'google.com',
)

user_ids = User.all.pluck(:id)

Album.destroy_all

base_url = 'https://s3.amazonaws.com/bandland-development/seeds/album_covers/'

File.readlines('db/seed_filenames/covers.txt').map(&:strip).each_with_index do |cover_name, i|
  Album.create!(
    artist_id: user_ids.sample,
    title: "#{Faker::StarWars.vehicle}_#{i}",
    price: rand(10),
    description: 'howdy. what a nuanced album',
    cover_img: base_url + cover_name
  )
end

# album_ids = Album.all.pluck(:id)

Collecting.destroy_all

Album.all.each do |alb|
  Collecting.create!(
    collector_id: user_ids.sample,
    collected_id: alb.id
  )
end

Track.destroy_all

Track.create!(
  ord: 1,
  album_id: Album.first.id,
  title: 'tailwhip',
  audio_file: File.open('app/assets/audio/tailwhip.mp3')
)

Track.create!(
  ord: 2,
  album_id: Album.first.id,
  title: 'lauren',
  audio_file: File.open('app/assets/audio/lauren.mp3')
)
