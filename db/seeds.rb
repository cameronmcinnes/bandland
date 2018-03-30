# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

album_titles = [
  'Single Source of Truth',
  'POJO',
  'The Interview',
  'The Offering',
  'Iced Sencha Saturday',
  'Machine Loving',
  'Scorched Ruby',
  'Concatenate!',
  'The Googly Eye Mystery',
  'Polymorph',
  'OOP',
  'MVC',
  'Chill Hands',
  'Ode to Kenny\'s',
  'Graduation Day',
  'Down with Cibo',
  'Dollar Pizza Saved My Life',
  'Extraneous Fire Drill'
]

artist_names = [
  'DJ Query',
  'BCrypt Keeper',
  'The Bundlers',
  'Matz',
  'Mazehead',
  'The Fluid Grid',
  'The Fat Arrows',
  'Yamlr',
  'The Stack',
  'Validator'
]


tags = [
  'all',
  'electronic',
  'metal',
  'ambient',
  'jazz',
  'rap',
  'pop',
  'k-pop',
  'grunge',
  'diy',
  'disco',
  'ballads'
];

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

base_url = 'https://s3.amazonaws.com/bandland-development/seeds/'

album_cover_names = File.readlines('db/seed_filenames/covers.txt').map(&:strip)
artist_images = File.readlines('db/seed_filenames/profile_imgs.txt').map(&:strip)

artist_names.each_with_index do |name, idx|
  User.create!(
    username: name,
    email: Faker::Internet.email,
    location: Faker::Pokemon.location,
    password: 'verymodern',
    description: Faker::Company.bs,
    profile_img: "#{base_url}profile_photos/#{artist_images[idx]}" ,
    banner_img: "#{base_url}album_covers/#{album_cover_names.sample}"
  )
end

user_ids = User.all.pluck(:id)

Album.destroy_all

album_cover_names.each_with_index do |cover_name, i|
  Album.create!(
    artist_id: user_ids.sample,
    title: album_titles[i],
    price: rand(10),
    description: Faker::Hipster.paragraphs.join("\n\n\n"),
    cover_img: "#{base_url}album_covers/#{cover_name}"
  )
end

album_ids = Album.all.pluck(:id)

Collecting.destroy_all

4.times do
  album_ids.each do |id|
    Collecting.find_or_create_by(
      collector_id: user_ids.sample,
      collected_id: id
    )
  end
end

tags.each do |tag_name|
  Tag.create!(name: tag_name)
end

tag_ids = Tag.all.pluck(:id)

tag_ids.each do |tag_id|
  8.times do
    Tagging.find_or_create_by(tag_id: tag_id,
      taggable_id: album_ids.sample,
      taggable_type: 'Album'
    )
  end
end

Track.destroy_all

track_names = File.readlines('db/seed_filenames/tracks.txt').map(&:strip)

idx = 0
Album.all.each do |alb|
  Track.create!(
    title: Faker::Company.buzzword,
    audio_file: "#{base_url}tracks/#{track_names[idx]}" ,
    album_id: alb.id,
    ord: 1
  )
  idx += 1
  Track.create!(
    title: Faker::Company.buzzword,
    audio_file: "#{base_url}tracks/#{track_names[idx]}" ,
    album_id: alb.id,
    ord: 2
  )
  idx += 1
end
