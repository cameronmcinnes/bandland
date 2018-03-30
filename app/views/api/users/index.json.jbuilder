json.key_format! camelize: :lower

@users.each do |user|
  json.set! user.id do
    json.partial! 'api/users/user_basic', user: user
  end
end
