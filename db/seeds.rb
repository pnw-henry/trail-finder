puts "Seeding data..."

#Users

henry = User.create!(name: "Henry Escobar", experience: "Expert", username: "bimet", password_digest: BCrypt::Password.create("fun2hike2"))
will = User.create!(name: "Will Perry", experience: "Intermediate", username: "willpe", password_digest: BCrypt::Password.create("likes2hike2"))
sam = User.create!(name: "Sam Piper", experience: "Beginner", username: "sammies", password_digest: BCrypt::Password.create("hopeful4hikes"))
matt = User.create!(name: "Matt Garling", experience: "Intermediate", username: "Mattg", password_digest: BCrypt::Password.create("mud&rocks"))
alex = User.create!(name: "Alex Poulin", experience: "Expert", username: "pnwalex", password_digest: BCrypt::Password.create("hikeswithdogs"))
brian = User.create!(name: "Brian O'Shea", experience: "Expert", username: "boshea", password_digest: BCrypt::Password.create("brianhikes"))
graham = User.create!(name: "Graham Duda", experience: "Expert", username: "duda", password_digest: BCrypt::Password.create("grahamhikes"))


#Trails

rattlesnake = Trail.create!(name: "Rattlesnake Ledge", location: "North Bend", difficulty: "Easy", length: 4.0, elevation_gain: 1160, highest_point: 2078 )
hidden = Trail.create!(name: "Hidden Lake Lookout", location: "North Cascades", difficulty: "Hard", length: 8.0, elevation_gain: 3300, highest_point: 6900 )
blanca = Trail.create!(name: "Blanca Lake", location: "Stevens Pass", difficulty: "Hard", length: 7.5, elevation_gain: 3300, highest_point: 4600 )
lake22 = Trail.create!(name: "Lake 22", location: "North Cascades", difficulty: "Moderate", length: 5.4, elevation_gain: 1350, highest_point: 2400 )
snow = Trail.create!(name: "Snow Lake", location: "Snoqualmie Pass", difficulty: "Moderate", length: 7.2, elevation_gain: 1800, highest_point: 4400 )
mailbox = Trail.create!(name: "Mailbox Peak", location: "North Bend", difficulty: "Hard", length: 9.4, elevation_gain: 4000, highest_point: 4900 )
bandera = Trail.create!(name: "Bandera Mt", location: "North Bend", difficulty: "Moderate", length: 8.0, elevation_gain: 3400, highest_point: 5200 )
granite = Trail.create!(name: "Granite Mt", location: "Snoqualmie Pass", difficulty: "Hard", length: 8.6, elevation_gain: 3800, highest_point: 5600 )
poo = Trail.create!(name: "Poo Poo Point", location: "Issaquah", difficulty: "Moderate", length: 7.2, elevation_gain: 1800, highest_point: 4400 )


#Visits

Visit.create!(user_id: henry.id, trail_id: hidden.id, condition: "cloudy", date: "2023-02-24", summary: "Challenging trail with a few mosquitos along the way and some snow towards the top" )
Visit.create!(user_id: will.id, trail_id: blanca.id, condition: "sunny", date: "2023-03-15", summary: "Trails in great condition and easily marked. Lots of switchbacks at the start!" )
Visit.create!(user_id: sam.id, trail_id: rattlesnake.id, condition: "rain", date: "2023-01-12", summary: "Trail inaccessible due to landslide :(" )
Visit.create!(user_id: matt.id, trail_id: hidden.id, condition: "snow", date: "2022-11-23", summary: "Brautiful trail with some difficult sections but nothign too crazy" )
Visit.create!(user_id: alex.id, trail_id: blanca.id, condition: "sunny", date: "2022-12-02", summary: "The road leading to the trailhead was closed! We walke an extra mile to get to it but it was totally worth it!" )
Visit.create!(user_id: brian.id, trail_id: lake22.id, condition: "cloudy", date: "2022-12-24", summary: "Trail was in great condition and the lake was beautiful!" )
Visit.create!(user_id: graham.id, trail_id: snow.id, condition: "rain", date: "2022-12-24", summary: "A little rainy, but overall a fantastic hike with a nice descent into the lake!" )



puts "Done seeding!"