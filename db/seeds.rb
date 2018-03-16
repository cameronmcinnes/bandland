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
  'Abramov\'s Revenge',
  'Redux Delux',
  'The Interview',
  'The Offering',
  'Iced Sencha Saturday',
  'Machine Loving',
  'Scorched Ruby',
  'Concatenate!',
  'Module \'album\' not found',
  'The Googly Eye Mystery',
  'Polymorph',
  'OOP',
  'HOC',
  'Gem Install Abby',
  'MVC',
  'Livenbetter',
  'Scotty Dog',
  'Manhattan Spa',
  'Chill Hands',
  'Full Dishwashers',
  'Ode to Kenny\'s',
  'Dollar Pizza Saved My Life',
  'Down with Cibo',
  'Q Train',
  'Divs Only',
  'Extraneous Fire Drill'
]

artist_names = [
  'Validator',
  'The Fat Arrows',
  'Matz',
  'BCrypt Keeper',
  'The Bundlers',
  'Yamlr',
  'DJ Query',
  'The Fluid Grid',
  'Snake',
  'Mazehead',
  'The Stack'
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

artist_names.each_with_index do |name, idx|
  User.create!(
    username: name,
    email: Faker::Internet.email,
    location: Faker::Pokemon.location,
    password: 'verymodern',
    description: Faker::Company.bs,
    profile_img: Faker::Avatar.image,
    banner_img: Faker::Company.logo
  )
end

user_ids = User.all.pluck(:id)

Album.destroy_all

base_url = 'https://s3.amazonaws.com/bandland-development/seeds/album_covers/'

File.readlines('db/seed_filenames/covers.txt').map(&:strip).each_with_index do |cover_name, i|
  Album.create!(
    artist_id: user_ids.sample,
    title: album_titles[i],
    price: rand(10),
    description: Faker::Hipster.paragraphs.join("\n\n\n"),
    cover_img: base_url + cover_name
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
