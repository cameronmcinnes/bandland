json.key_format! camelize: :lower

json.extract! @following, :follower_id, :followee_id
