# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'Creating Users'

User.create(
	username: 'josh',
	password: '123',
	admin: true,
	email: 'josh@example.com',
)

User.create(
	username: 'jessie',
	password: '123',
	admin: false,
	email: 'jessie@example.com',
)

puts 'Creating Courses'

Course.create(
	name: 'Getting Started',
	desc: 'Assembly, Reed Care, Breathing & Posture',
	details:
		'This lesson will go over instrument assembly, caring for your reed, proper posture, and breathing for the bassoon',
)

Course.create(
	name: 'Music Theory',
	desc: 'Parts of the Staff, Lines and Spaces',
	details:
		'This lesson will go over parts of the staff: clefs, barlines, measures, and time signatures. We will also introduce the musical alphabet and the lines/spaces of the bass clef.',
)

Course.create(
	name: 'First Sounds',
	desc: 'Forming an Embouchure & Articulation',
	details:
		'This lesson will introduce making sounds on our reed and bocal! We will practice producing a long, steady sound at first and then we will introduce articulation (the tongue touching the reed to create shorter sounds).',
)

Course.create(
	name: 'The Full Bassoon',
	desc: 'Proper Posture & Hand Position',
	details:
		'At first the bassoon can seem like a very awkward instrument! This lesson will show you how to sit with the bassoon and where your hands and fingers will go.',
)

Course.create(
	name: 'Warm Ups',
	desc: 'Creating a Daily Routine',
	details:
		'Getting a good warm up is crucial to the rest of your practice session or rehearsal. This lesson will introduce a short routine that you can do every day.',
)

Course.create(
	name: 'First Song!',
	desc: 'Hot Cross Buns!',
	details:
		'This lesson will introduce our first song - Hot Cross Buns! It only uses the notes and rhythms we play in our warm up so it is the perfect first song.',
)

puts 'Creating Enrollments'

Enrollment.create(user_id: User.all.sample.id, course_id: Course.all.sample.id)

puts 'Creating Comments'
