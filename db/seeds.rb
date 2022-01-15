User.destroy_all
Course.destroy_all
Enrollment.destroy_all
Comment.destroy_all
Video.destroy_all
Extra.destroy_all
ExtraItem.destroy_all

puts 'Creating Users'

User.create(
	id: 1,
	username: 'josh',
	password: '123',
	admin: true,
	email: 'josh@example.com',
)

User.create(
	id: 2,
	username: 'jessie',
	password: '123',
	admin: false,
	email: 'jessie@example.com',
)

User.create(
	id: 3,
	username: 'kelly',
	password: '123',
	admin: false,
	email: 'kelly@example.com',
)

User.create(
	id: 4,
	username: 'ashley',
	password: '123',
	admin: false,
	email: 'ashley@example.com',
)

puts 'Creating Courses'

Course.create(
	id: 1,
	name: 'Getting Started',
	desc: 'Assembly, Reed Care, Breathing & Posture',
	details:
		'This lesson will go over instrument assembly, caring for your reed, proper posture, and breathing for the bassoon',
)

Course.create(
	id: 2,
	name: 'Music Theory',
	desc: 'Parts of the Staff, Lines and Spaces',
	details:
		'This lesson will go over parts of the staff: clefs, barlines, measures, and time signatures. We will also introduce the musical alphabet and the lines/spaces of the bass clef.',
)

Course.create(
	id: 3,
	name: 'First Sounds',
	desc: 'Forming an Embouchure & Articulation',
	details:
		'This lesson will introduce making sounds on our reed and bocal! We will practice producing a long, steady sound at first and then we will introduce articulation (the tongue touching the reed to create shorter sounds).',
)

Course.create(
	id: 4,
	name: 'The Full Bassoon',
	desc: 'Proper Posture & Hand Position',
	details:
		'At first the bassoon can seem like a very awkward instrument! This lesson will show you how to sit with the bassoon and where your hands and fingers will go.',
)

Course.create(
	id: 5,
	name: 'Warm Ups',
	desc: 'Creating a Daily Routine',
	details:
		'Getting a good warm up is crucial to the rest of your practice session or rehearsal. This lesson will introduce a short routine that you can do every day.',
)

Course.create(
	id: 6,
	name: 'First Song!',
	desc: 'Hot Cross Buns!',
	details:
		'This lesson will introduce our first song - Hot Cross Buns! It only uses the notes and rhythms we play in our warm up so it is the perfect first song.',
)

puts 'Creating Extra Resources...'

Extra.create(
	id: 1,
	name: 'Private Teachers',
	desc: 'Names of Online Teachers',
	details:
		'Having a private tutor can be a huge help when you are first learning a new skill! Here is a list of teachers who support online learning.',
)

Extra.create(
	id: 2,
	name: 'Reed Sources',
	desc: 'Websites for Quality Reeds',
	details:
		'The reed is arguably the most important part of playing the bassoon. These companies and reed makers make quality products that help you make your best sound.',
)

Extra.create(
	id: 3,
	name: 'Music Theory Games',
	desc: 'Make Practicing Theory Fun!',
	details:
		'Here are a list of resources that make learning music theory fun and exciting',
)

puts 'Creating Enrollments'

Enrollment.create(user_id: User.all.sample.id, course_id: 1)
Enrollment.create(user_id: User.all.sample.id, course_id: 2)
Enrollment.create(user_id: User.all.sample.id, course_id: 3)
Enrollment.create(user_id: User.all.sample.id, course_id: 4)
Enrollment.create(user_id: User.all.sample.id, course_id: 5)
Enrollment.create(user_id: User.all.sample.id, course_id: 6)

puts 'Creating Comments'

Comment.create(
	comment: 'Great lesson!',
	user_id: User.all.sample.id,
	course_id: Course.all.sample.id,
)

Comment.create(
	comment: 'I am a little confused...',
	user_id: User.all.sample.id,
	course_id: Course.all.sample.id,
)

Comment.create(
	comment: 'I did it!',
	user_id: User.all.sample.id,
	course_id: Course.all.sample.id,
)

Comment.create(
	comment: 'My bassoon sounds like Chewbaca',
	user_id: User.all.sample.id,
	course_id: Course.all.sample.id,
)

Comment.create(
	comment: 'Do you have to soak your reed?',
	user_id: User.all.sample.id,
	course_id: Course.all.sample.id,
)

Comment.create(
	comment: 'My reed is too hard...',
	user_id: User.all.sample.id,
	course_id: Course.all.sample.id,
)

Comment.create(
	comment: 'How can I get more practice at this?',
	user_id: User.all.sample.id,
	course_id: Course.all.sample.id,
)

puts 'Creating Videos'

Video.create(
	title: 'Parts of the Instrument',
	url: 'https://youtu.be/S4ih6K5ArUE',
	course_id: 1,
)

Video.create(
	title: 'Instrument Assembly',
	url: 'https://youtu.be/WOM1ea5z13I',
	course_id: 1,
)

Video.create(
	title: 'Reed Care',
	url: 'https://youtu.be/4gQQWeAjO9k',
	course_id: 1,
)

Video.create(
	title: 'Posture & Breathing',
	url: 'https://youtu.be/aIuzWmxILkk',
	course_id: 1,
)

Video.create(
	title: 'Parts of the Staff',
	url: 'https://youtu.be/sc8oqCcj1O8',
	course_id: 2,
)

Video.create(
	title: 'Reading Bass Clef',
	url: 'https://youtu.be/-0-FolsjZp0',
	course_id: 2,
)

Video.create(
	title: 'First Sounds',
	url: 'https://youtu.be/rL0JHGXV-_M',
	course_id: 3,
)

Video.create(
	title: 'Articulation',
	url: 'https://youtu.be/qgrHpuW3J_w',
	course_id: 3,
)

Video.create(
	title: 'The Full Bassoon!',
	url: 'https://youtu.be/3Gfe-rBpx3I',
	course_id: 4,
)

Video.create(
	title: 'Hand Position',
	url: 'https://youtu.be/xMZqAR9iphw',
	course_id: 4,
)

Video.create(
	title: 'Daily Warm Up',
	url: 'https://youtu.be/NfSQJeQZbIo',
	course_id: 5,
)

Video.create(
	title: 'First Song: Hot Cross Buns',
	url: 'https://youtu.be/YD2dSngkfec',
	course_id: 6,
)

puts 'Creating Extra Items...'

ExtraItem.create(extra_id: 1, detail: 'Ryan Morris')

ExtraItem.create(extra_id: 1, detail: 'Robyn Watson')

ExtraItem.create(extra_id: 1, detail: 'Kristen Goguen')

ExtraItem.create(extra_id: 2, detail: 'www.bocalmajoritystore.com')

ExtraItem.create(extra_id: 2, detail: 'www.mmimports.com')

ExtraItem.create(extra_id: 2, detail: 'www.singindog.com')

ExtraItem.create(extra_id: 3, detail: 'www.musictheory.net')

ExtraItem.create(extra_id: 3, detail: 'Staff Wars for iPhone/ iPad')

puts 'Seeding Complete!✅'
