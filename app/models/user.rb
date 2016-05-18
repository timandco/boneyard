class User < ActiveRecord::Base
	include Rails.application.routes.url_helpers

	mount_uploader :avatar, AvatarUploader
end
