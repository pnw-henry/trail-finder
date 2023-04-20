puts "Seeding data..."

#Users

henry = User.create!(name: "Henry Escobar", experience: "Experienced", username: "bimet", password_digest: BCrypt::Password.create("fun2hike"))
will = User.create!(name: "Will Perry", experience: "Intermediate", username: "willpe", password_digest: BCrypt::Password.create("likes2hike"))
sam = User.create!(name: "Sam Piper", experience: "Novice", username: "sammies", password_digest: BCrypt::Password.create("hopeful4hikes"))
matt = User.create!(name: "Matt Garling", experience: "Intermediate", username: "Mattg", password_digest: BCrypt::Password.create("mud&rocks"))
alex = User.create!(name: "Alex Poulin", experience: "Experienced", username: "pnwalex", password_digest: BCrypt::Password.create("hikeswithdogs"))


#Trails

rattlesnake = Trail.create!(name: "Rattlesnake Ledge", location: "North Bend", difficulty: "Easy", length: 4.0, elevation_gain: 1160, highest_point: 2078 )
hidden = Trail.create!(name: "Hidden Lake Lookout", location: "North Cascades", difficulty: "Hard", length: 8.0, elevation_gain: 3300, highest_point: 6900 )
blanca = Trail.create!(name: "Blanca Lake", location: "Stevens Pass", difficulty: "Hard", length: 7.5, elevation_gain: 3300, highest_point: 4600 )

#Visits

Visit.create!(user_id: henry.id, trail_id: hidden.id, condition: "cloudy", date: "2023-02-24", summary: "Challenging trail with a few mosquitos along the way and some snow towards the top" )
Visit.create!(user_id: will.id, trail_id: blanca.id, condition: "sunny", date: "2023-03-15", summary: "Trails in great condition and easily marked. Lots of switchbacks at the start!" )
Visit.create!(user_id: sam.id, trail_id: rattlesnake.id, condition: "rain", date: "2023-01-12", summary: "Trail inaccessible due to landslide :(" )
Visit.create!(user_id: matt.id, trail_id: hidden.id, condition: "snow", date: "2022-11-23", summary: "Brautiful trail with some difficult sections but nothign too crazy" )
Visit.create!(user_id: alex.id, trail_id: blanca.id, condition: "sunny", date: "2022-12-02", summary: "The road leading to the trailhead was closed! We walke an extra mile to get to it but it was totally worth it!" )


puts "Done seeding!"