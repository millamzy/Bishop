import { SermonMessage, BookingRecord, ItineraryItem, PastorProfile } from '@/types';

export const PASTOR_PROFILE: PastorProfile = {
  name: 'The Rt. Rev. Ndubuisi Chukwuka Obinna Obi',
  title: 'Bishop of the Anglican Diocese of Nnewi | Church of Nigeria (Anglican Communion)',
  churchName: 'Anglican Diocese of Nnewi',
  diocese: 'Diocese of Nnewi (Anglican Communion)',
  cathedral: 'Cathedral Church of St. Mary, Uruagu, Nnewi',
  location: 'Nnewi, Anambra State, Nigeria',
  photoUrl: '/images/bishop.jpg',
  spouse: 'Mrs. Ukamaka Zipporah Obi (President, Mothers’ Union & Women’s Guild)',
  episcopacyDate: '24th September 2019',
  enthronementDate: '27th September 2019',
  bioSummary:
    'A consecrated bishop, dynamic revivalist, renowned expository preacher, and passionate shepherd of God’s flock. Leading the Anglican Diocese of Nnewi with apostolic zeal, grassroots evangelism, youth empowerment, and transformational diocesan development.',
  fullBio: [
    'The Right Reverend Ndubuisi Chukwuka Obinna Obi was born on December 17, 1965, into the respected priestly family of the late Rev. Canon Abel Okwuchukwu Obi in Okpuno, Nnewichi, Nnewi, Anambra State, Nigeria. He descends from a distinguished heritage of pioneering church teachers and catechists who served under the historic Diocese on the Niger.',
    'He received his early education in Nsukka and Onitsha, completing his secondary education at the prestigious Dennis Memorial Grammar School (DMGS), Onitsha. Demonstrating exceptional diligence and leadership from an early age, he subsequently spent seventeen successful years as a businessman and entrepreneur before yielding completely to the sovereign call of God into full-time ordained Holy Orders.',
    'Following his ordination in the Church of Nigeria (Anglican Communion), he served faithfully in various pastoral postings, emerging as a vibrant television evangelist, author, and conference revivalist. He notably served as the Vicar of St. Augustine’s Anglican Church, Federal Housing Estate, 3-3, Onitsha in the Diocese on the Niger, where God used his ministry for sweeping spiritual and infrastructural revitalization.',
    'On August 23, 2019, the Episcopal Synod of the Church of Nigeria (Anglican Communion) elected him as the second Bishop of the Diocese of Nnewi, succeeding the pioneer Bishop, Most Rev. Prof. Godwin Okpala. He was consecrated Bishop at the Cathedral Church of St. Peter, Asaba on September 24, 2019, and triumphantly enthroned at the Cathedral Church of St. Mary, Uruagu, Nnewi on September 27, 2019.',
    'Under his visionary episcopacy, the Diocese of Nnewi has witnessed unprecedented spiritual awakening, aggressive church planting, youth transformation, clergy welfare enhancements, and economic self-sustainability initiatives. Bishop Ndubuisi Obi is happily married to Mrs. Ukamaka Zipporah Obi (Mama Nnewi), and their marriage is blessed with godly children.'
  ],
  vision:
    'To build a spiritually vibrant, mission-driven, socially responsible, and economically self-reliant Diocese, where Christ is exalted, souls are saved, and believers are equipped for kingdom exploits.',
  phone: '08035462727',
  whatsappNumber: '2348035462727',
  officeAddress: 'Bishopscourt, Anglican Diocese of Nnewi, P.O. Box 2630, Nnewi, Anambra State, Nigeria',
  counselingDays: 'Tuesdays & Thursdays (Episcopal Audiences: 10:00 AM – 3:00 PM)',
  socials: {
    youtube: 'https://youtube.com/@bishopndubuisiobi6348?si=2lyxarJen1lKUjmn',
    telegram: 'https://t.me/dioceseofnnewi',
    facebook: 'https://facebook.com',
    podcast: 'https://spotify.com',
    instagram: 'https://instagram.com'
  }
};

export const BISHOP_YOUTUBE_CHANNEL = 'https://youtube.com/@bishopndubuisiobi6348?si=2lyxarJen1lKUjmn';

export const BISHOP_YOUTUBE_VIDEOS: {
  id: string;
  videoId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedText: string;
  viewsText: string;
  youtubeUrl: string;
  series: string;
}[] = [
    {
      id: 'yt-1',
      videoId: 't5o8eBFX00U',
      title: '2024 Synod Presidential Address: A Chosen Generation',
      description: 'The official presidential address delivered by The Rt. Rev. Ndubuisi Obi at the Diocesan Synod in Cathedral Church of St. Mary, Uruagu, Nnewi.',
      thumbnailUrl: 'https://i.ytimg.com/vi/t5o8eBFX00U/hqdefault.jpg',
      publishedText: 'Diocesan Synod',
      viewsText: 'Presidential Charge',
      youtubeUrl: 'https://youtube.com/@bishopndubuisiobi6348?si=2lyxarJen1lKUjmn',
      series: 'Diocesan Synod'
    },
    {
      id: 'yt-2',
      videoId: 'GR0PaClL3sg',
      title: 'Building Upon The Rock (Episode 1)',
      description: 'Expository Biblical teaching on establishing an unshakeable spiritual foundation in times of economic and societal shaking.',
      thumbnailUrl: 'https://i.ytimg.com/vi/GR0PaClL3sg/hqdefault.jpg',
      publishedText: 'Expository Series',
      viewsText: 'Episode 1',
      youtubeUrl: 'https://youtube.com/@bishopndubuisiobi6348?si=2lyxarJen1lKUjmn',
      series: 'Foundation Series'
    },
    {
      id: 'yt-3',
      videoId: 'Z4dGiTHS9IU',
      title: 'Building Upon The Rock (Episode 2)',
      description: 'Part 2 of the profound series by Bishop Ndubuisi Obi exploring spiritual discipline, covenant obedience, and divine security.',
      thumbnailUrl: 'https://i.ytimg.com/vi/Z4dGiTHS9IU/hqdefault.jpg',
      publishedText: 'Expository Series',
      viewsText: 'Episode 2',
      youtubeUrl: 'https://youtube.com/@bishopndubuisiobi6348?si=2lyxarJen1lKUjmn',
      series: 'Foundation Series'
    },
    {
      id: 'yt-4',
      videoId: 'BqEUXqFlEAE',
      title: 'Acts of the Apostles (Episode 51): Power for Kingdom Advance',
      description: 'In-depth verse-by-verse exposition of the early church apostolic breakthrough, Holy Ghost baptism, and miracles in evangelism.',
      thumbnailUrl: 'https://i.ytimg.com/vi/BqEUXqFlEAE/hqdefault.jpg',
      publishedText: 'Apostolic Series',
      viewsText: 'Episode 51',
      youtubeUrl: 'https://youtube.com/@bishopndubuisiobi6348?si=2lyxarJen1lKUjmn',
      series: 'Apostolic Series'
    },
    {
      id: 'yt-5',
      videoId: 'DeqFOIwqqOc',
      title: 'New Month Prophetic Declaration & Covenant Blessings',
      description: 'Prophetic declarations, priestly intercession, and divine decrees over parishes, families, and businesses for the new month.',
      thumbnailUrl: 'https://i.ytimg.com/vi/DeqFOIwqqOc/hqdefault.jpg',
      publishedText: 'Prophetic Broadcast',
      viewsText: 'Covenant Blessings',
      youtubeUrl: 'https://youtube.com/@bishopndubuisiobi6348?si=2lyxarJen1lKUjmn',
      series: 'Prophetic Declarations'
    },
    {
      id: 'yt-6',
      videoId: 'BelQnzbh9zM',
      title: 'You Will Be Rewarded for Walking with God',
      description: 'Encouraging believers to persist in righteousness and sacrificial ministry, knowing that God is a rewarder of those that diligently seek Him.',
      thumbnailUrl: 'https://i.ytimg.com/vi/BelQnzbh9zM/hqdefault.jpg',
      publishedText: 'Cathedral Sermon',
      viewsText: 'Sunday Worship',
      youtubeUrl: 'https://youtube.com/@bishopndubuisiobi6348?si=2lyxarJen1lKUjmn',
      series: 'Christian Living'
    },
    {
      id: 'yt-7',
      videoId: 'GJqKKDK_wgU',
      title: 'The Three Nations: America, Iran and Israel (Episode 4)',
      description: 'A prophetic and geopolitical scriptural analysis connecting end-time prophecies, the Middle East, and the Church posture.',
      thumbnailUrl: 'https://i.ytimg.com/vi/GJqKKDK_wgU/hqdefault.jpg',
      publishedText: 'Prophetic Analysis',
      viewsText: 'Episode 4',
      youtubeUrl: 'https://youtube.com/@bishopndubuisiobi6348?si=2lyxarJen1lKUjmn',
      series: 'End-Time Prophecy'
    },
    {
      id: 'yt-8',
      videoId: 'xe6UdULodmo',
      title: 'The Grace of Repentance & Reconciliation (I Am Sorry)',
      description: 'A deeply touching pastoral message on humility, forgiveness, and healing broken relationships in Christian homes and churches.',
      thumbnailUrl: 'https://i.ytimg.com/vi/xe6UdULodmo/hq720.jpg',
      publishedText: 'Pastoral Exhortation',
      viewsText: 'Spiritual Life',
      youtubeUrl: 'https://youtube.com/@bishopndubuisiobi6348?si=2lyxarJen1lKUjmn',
      series: 'Spiritual Life'
    }
  ];

export const INITIAL_MESSAGES: SermonMessage[] = [
  {
    id: 'sermon-1',
    title: 'The Presidential Synod Charge: Standing in the Gap for the Land',
    slug: 'standing-in-the-gap-for-the-land',
    series: 'Diocesan Synod Charges',
    preacher: 'The Rt. Rev. Ndubuisi C. O. Obi',
    datePreached: '2026-10-25',
    mediaType: 'both',
    scriptureReference: 'Ezekiel 22:30; 2 Chronicles 7:14; Nehemiah 1:3-11',
    durationMinutes: 58,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    audioFileSizeMb: 12.8,
    youtubeVideoId: 't5o8eBFX00U',
    youtubeUrl: 'https://youtube.com/@bishopndubuisiobi6348?si=2lyxarJen1lKUjmn',
    videoThumbnailUrl: 'https://i.ytimg.com/vi/t5o8eBFX00U/hqdefault.jpg',
    summary:
      'In this watershed Presidential Address delivered at the Cathedral Church of St. Mary, Bishop Ndubuisi Obi sounds a clarion call to the Church in Anambra and Nigeria to rise as righteous intercessors against moral decay and socioeconomic hopelessness.',
    fullContent: `
# The Presidential Synod Charge: Standing in the Gap for the Land

**Delivered by:** The Rt. Rev. Ndubuisi Chukwuka Obinna Obi  
**Bishop of the Anglican Diocese of Nnewi**  
**Cathedral Church of St. Mary, Uruagu, Nnewi**  
**Text:** Ezekiel 22:30; 2 Chronicles 7:14  

---

### Grace and Salutation
Beloved clergy, legal luminaries, venerable archdeacons, delegates to this Synod, and all faithful parishioners of the Anglican Diocese of Nnewi: Grace, peace, and divine power be multiplied unto you from God our Father and our Lord Jesus Christ.

### 1. The Crisis of the Breach
The Prophet Ezekiel recorded one of the most sobering verses in sacred Scripture:  
*"And I sought for a man among them, that should make up the hedge, and stand in the gap before me for the land, that I should not destroy it: but I found none."* (Ezekiel 22:30)

When God looks upon a nation, a state, or a community undergoing tribulation, He does not look for political manifestos or economic committees. He searches for a consecrated priesthood—believers who refuse to bow to corruption, who understand spiritual warfare, and who stand in the breach between divine judgment and mercy.

### 2. Four Pillars of Standing in the Gap
1. **Unflinching Biblical Truth:** The pulpit must never be compromised for earthly popularity. We must preach repentance, holy living, and salvation through Christ alone.
2. **Aggressive Discipleship & Youth Mission:** Our young people in Nnewi, Anambra State, and across Nigeria are besieged by quick-wealth syndromes, idolatrous rituals, and substance abuse. The Church must provide an authentic encounter with the Living Christ.
3. **Compassionate Pastoral Care:** A true shepherd smells like the sheep. We must care for the poor, visit the sick, and comfort the grieving.
4. **Economic Self-Reliance & Diligence:** Faith is accompanied by works. Believers must embody hard work, entrepreneurial excellence, and kingdom integrity in commerce.

### Conclusion and Episcopal Benediction
Let every archdeaconry, parish, and family in our Diocese become an altar of unceasing prayer. May the Lord revive His work in our midst and preserve our land in Jesus’ name. Amen.
    `.trim(),
    topics: ['Leadership & Purpose', 'Kingdom Revival', 'Spiritual Growth'],
    keyPoints: [
      'God seeks righteous intercessors before releasing national healing.',
      'The Anglican heritage is rooted in expository scripture and sacrificial service.',
      'Christian youth must be reclaimed from modern moral collapse through radical discipleship.'
    ],
    featured: true,
    playCount: 3840,
    downloadCount: 2450
  },
  {
    id: 'sermon-2',
    title: 'Passing the Torch of Biblical Faith to the Next Generation',
    slug: 'passing-torch-of-faith-next-generation',
    series: 'Heritage of Consecration',
    preacher: 'The Rt. Rev. Ndubuisi C. O. Obi',
    datePreached: '2026-10-11',
    mediaType: 'both',
    scriptureReference: '2 Timothy 1:5-7; Psalm 78:4-8',
    durationMinutes: 47,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    audioFileSizeMb: 10.4,
    youtubeVideoId: 'BelQnzbh9zM',
    youtubeUrl: 'https://youtube.com/@bishopndubuisiobi6348?si=2lyxarJen1lKUjmn',
    videoThumbnailUrl: 'https://i.ytimg.com/vi/BelQnzbh9zM/hqdefault.jpg',
    summary:
      'Drawing from his heritage as the son of an Anglican priest and a DMGS alumnus, Bishop Obi challenges Christian parents and church leaders to instill enduring faith, prayer, and character into their children.',
    fullContent: `
# Passing the Torch of Biblical Faith to the Next Generation

**Preacher:** The Rt. Rev. Ndubuisi C. O. Obi  
**Venue:** Anglican Diocese of Nnewi Youth Convention  
**Text:** 2 Timothy 1:5; Psalm 78:4–7  

---

### The Legacy of Unfeigned Faith
Paul wrote to Timothy: *"When I call to remembrance the unfeigned faith that is in thee, which dwelt first in thy grandmother Lois, and thy mother Eunice; and I am persuaded that in thee also."*

Faith is not an accident; it is cultivated through intentional spiritual parenting. If we build massive houses, leave millions in bank accounts, and fail to transfer a living relationship with Jesus Christ to our sons and daughters, we have failed comprehensively.

### Three Crucial Responsibilities of Every Christian Home
1. **The Family Altar:** Every home must have a regular altar of scripture reading and prayer. Offenses cannot fester when husbands, wives, and children bow together before God.
2. **Modeling Integrity:** Children learn far more from what parents do than from what parents preach. Let your marketplace honesty match your Sunday reverence.
3. **Spiritual Mentorship:** Give our youths responsibilities in church and support them as they navigate modern technological pressures.
    `.trim(),
    topics: ['Family & Marriage', 'Spiritual Growth'],
    keyPoints: [
      'Wealth without God is a tragedy waiting to happen.',
      'The family altar is the spiritual engine of church resilience.',
      'Youths need spiritual fathers who listen, guide, and pray with conviction.'
    ],
    featured: true,
    playCount: 2950,
    downloadCount: 1840
  },
  {
    id: 'sermon-3',
    title: 'Rekindling the Altar of Intercession and Spiritual Power',
    slug: 'rekindling-altar-of-intercession',
    series: 'Apostolic Fire',
    preacher: 'The Rt. Rev. Ndubuisi C. O. Obi',
    datePreached: '2026-09-20',
    mediaType: 'both',
    scriptureReference: 'Leviticus 6:12-13; Acts 4:29-33',
    durationMinutes: 53,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    audioFileSizeMb: 11.6,
    youtubeVideoId: 'GR0PaClL3sg',
    youtubeUrl: 'https://youtube.com/@bishopndubuisiobi6348?si=2lyxarJen1lKUjmn',
    videoThumbnailUrl: 'https://i.ytimg.com/vi/GR0PaClL3sg/hqdefault.jpg',
    summary:
      'A powerful revival charge on the perpetual fire that must burn upon every believer’s personal altar. Learn how fervent prayer overcomes ancestral strongholds and releases divine breakthroughs.',
    fullContent: `
# Rekindling the Altar of Intercession and Spiritual Power

**Preacher:** The Rt. Rev. Ndubuisi C. O. Obi  
**Episcopal Revival Series**  
**Text:** Leviticus 6:13; Acts 4:31  

---

### The Commandment of the Fire
*"The fire shall ever be burning upon the altar; it shall never go out."*

The altar is where divinity meets humanity. Throughout church history, whenever the fire on the altar went dim, the church succumbed to carnality and worldly conformity. But whenever believers gathered in united, desperate intercession, chains were broken and territorial breakthroughs occurred.

### How to Maintain the Fire
- **Remove the Ashes:** Unforgiveness, secret sins, and apathy are the ashes that choke the Holy Spirit's flames.
- **Supply Fresh Wood Daily:** The daily study of the Holy Scriptures provides fuel for divine communion.
- **Persevere Through the Night:** Night prayer and early morning seeking demonstrate holy desperation.
    `.trim(),
    topics: ['Prayer & Fasting', 'Kingdom Revival'],
    keyPoints: [
      'The fire on the altar requires constant personal attention.',
      'Unforgiveness and bitter thoughts are ashes that choke the Spirit’s presence.',
      'Territorial revivals are birthed when parishes unite in fervent prayer.'
    ],
    featured: false,
    playCount: 2210,
    downloadCount: 1410
  },
  {
    id: 'sermon-4',
    title: 'The Covenant of Honour in Marriage: Building Durable Christian Homes',
    slug: 'covenant-of-honour-in-marriage',
    series: 'Mothers’ Union & Christian Home',
    preacher: 'The Rt. Rev. Ndubuisi C. O. Obi',
    datePreached: '2026-09-06',
    mediaType: 'written',
    scriptureReference: 'Ephesians 5:21-33; 1 Peter 3:1-7',
    durationMinutes: 38,
    youtubeVideoId: 'BqEUXqFlEAE',
    youtubeUrl: 'https://youtube.com/@bishopndubuisiobi6348?si=2lyxarJen1lKUjmn',
    videoThumbnailUrl: 'https://i.ytimg.com/vi/BqEUXqFlEAE/hqdefault.jpg',
    summary:
      'Marriage in the eyes of God is a sacred covenant, not a modern social contract. Bishop Obi provides deep biblical wisdom for singles, young couples, and seasoned marriages.',
    fullContent: `
# The Covenant of Honour in Marriage: Building Durable Christian Homes

**Preacher:** The Rt. Rev. Ndubuisi C. O. Obi  
**Diocesan Mothers’ Union & Men’s Fellowship Joint Assembly**  
**Text:** Ephesians 5:21–33  

---

### Mutual Submission Under Christ
Paul opens the marriage treatise with a timeless prerequisite: *"Submitting yourselves one to another in the fear of God."*

A Christian marriage cannot survive on selfish demands. It demands sacrificial love from the husband—a willingness to protect, nurture, and lead with humility—and joyful respect and honor from the wife.

### Practical Anchors for Marital Longevity
1. **Total Financial Transparency:** Secrets regarding money undermine trust faster than external trials.
2. **Rejection of Third-Party Interference:** Protect your spouse in public; resolve disagreements in private prayer.
3. **Consistent Communication:** Never allow anger to fester overnight.
    `.trim(),
    topics: ['Family & Marriage'],
    keyPoints: [
      'Sacrificial love and deep respect are the twin pillars of a peaceful home.',
      'Financial honesty creates security and mutual confidence.',
      'Christ must remain the indisputable Head of every Christian family.'
    ],
    featured: false,
    playCount: 1680,
    downloadCount: 890
  },
  {
    id: 'sermon-5',
    title: 'Kingdom Stewardship and Entrepreneurial Diligence in Hard Times',
    slug: 'kingdom-stewardship-entrepreneurial-diligence',
    series: 'Marketplace Ministers',
    preacher: 'The Rt. Rev. Ndubuisi C. O. Obi',
    datePreached: '2026-08-23',
    mediaType: 'both',
    scriptureReference: '1 Corinthians 4:1-2; Proverbs 22:29; Luke 16:10-12',
    durationMinutes: 51,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    audioFileSizeMb: 11.2,
    youtubeVideoId: 'Z4dGiTHS9IU',
    youtubeUrl: 'https://youtube.com/@bishopndubuisiobi6348?si=2lyxarJen1lKUjmn',
    videoThumbnailUrl: 'https://i.ytimg.com/vi/Z4dGiTHS9IU/hqdefault.jpg',
    summary:
      'Combining his 17 years in commercial enterprise with deep theological insights, the Bishop addresses economic resilience, hard work, integrity in trade, and tithing amidst inflation.',
    fullContent: `
# Kingdom Stewardship and Entrepreneurial Diligence in Hard Times

**Preacher:** The Rt. Rev. Ndubuisi C. O. Obi  
**Text:** Proverbs 22:29; 1 Corinthians 4:2  

---

### Faith Does Not Excuse Slothfulness
Before the Lord called me into full-time holy orders, I labored as a businessman for seventeen years. I know what it means to open a warehouse, negotiate shipments, manage capital, and face economic headwinds.

Scripture never promises prosperity to the lazy. *"Seest thou a man diligent in his business? He shall stand before kings; he shall not stand before mean men."* God blesses the work of your hands, not your idle wishes.

### Biblical Principles to Outlast Inflation
- **Skill Acquisition & Value Creation:** Continually upgrade your vocational competence.
- **Integrity in Measurement:** Deliver exactly what you promised your customers. Fraud destroys generational wealth.
- **Covenant Tithes and Cheerful Giving:** Never withhold God’s portion; it is the divine hedge over your investments.
    `.trim(),
    topics: ['Financial Stewardship', 'Leadership & Purpose'],
    keyPoints: [
      'God blesses diligence, strategic planning, and unbending integrity.',
      'Deceit in business brings temporary gains but generational ruin.',
      'Faith and financial discipline work together to produce kingdom wealth.'
    ],
    featured: false,
    playCount: 3120,
    downloadCount: 2100
  },
  {
    id: 'sermon-6',
    title: 'The Uncompromising Church in an Age of Compromise',
    slug: 'uncompromising-church-in-shifting-world',
    series: 'Apostolic Fire',
    preacher: 'The Rt. Rev. Ndubuisi C. O. Obi',
    datePreached: '2026-07-19',
    mediaType: 'both',
    scriptureReference: '2 Timothy 4:1-5; Jude 1:3; Revelation 3:14-22',
    durationMinutes: 62,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    audioFileSizeMb: 13.9,
    youtubeVideoId: 'GJqKKDK_wgU',
    youtubeUrl: 'https://youtube.com/@bishopndubuisiobi6348?si=2lyxarJen1lKUjmn',
    videoThumbnailUrl: 'https://i.ytimg.com/vi/GJqKKDK_wgU/hqdefault.jpg',
    summary:
      'A prophetic warning against syncretism, worldly music, and diluted sermons. The Bishop charges priests, lay leaders, and members to earnestly contend for the faith once delivered to the saints.',
    fullContent: `
# The Uncompromising Church in an Age of Compromise

**Preacher:** The Rt. Rev. Ndubuisi C. O. Obi  
**Cathedral Church of St. Mary, Uruagu, Nnewi**  
**Text:** 2 Timothy 4:1–5; Jude 1:3  

---

### Earnestly Contending for the Faith
Beloved in Christ, we are living in perilous times. Many pulpits have traded repentance for entertainment, and the cross of Christ for motivational speeches. But the Church of God is not an entertainment center; it is the pillar and ground of truth.

We must guard the ancient landmarks of our faith. We must teach sound doctrine, administer the holy sacraments with reverence, and refuse to blend pagan ancestral rites with the pure gospel of Christ.
    `.trim(),
    topics: ['Kingdom Revival', 'Faith & Grace'],
    keyPoints: [
      'Popularity with the world is hostility towards God.',
      'Syncretism and idolatry have no place in the body of Christ.',
      'The gospel without the cross is no gospel at all.'
    ],
    featured: true,
    playCount: 4190,
    downloadCount: 3010
  }
];

export const INITIAL_BOOKINGS: BookingRecord[] = [
  {
    id: 'book-1',
    referenceId: 'PST-2026-1042',
    type: 'counseling',
    fullName: 'Sir Emeka & Lady Ngozi Okonkwo',
    phone: '+234 803 456 7810',
    email: 'okonkwo.emeka@nnewibiz.ng',
    category: 'Marriage & Family Consultation',
    meetingMode: 'in_person',
    date: '2026-11-17',
    timeSlot: '10:00 AM - 10:45 AM',
    notes: 'Episcopal audience regarding family thanksgiving and endowment for the Diocesan Hospital Project.',
    status: 'confirmed',
    createdAt: '2026-11-10T09:30:00Z',
    adminNotes: 'Confirmed by Diocesan Chaplain. Meeting scheduled at Bishopscourt Boardroom.'
  },
  {
    id: 'book-2',
    referenceId: 'PST-2026-1049',
    type: 'counseling',
    fullName: 'Ven. Dr. Clement C. Iloka',
    phone: '+234 802 881 2290',
    email: 'clement.iloka@anglican-nnewi.org',
    category: 'Spiritual Guidance & Deliverance',
    meetingMode: 'in_person',
    date: '2026-11-17',
    timeSlot: '11:00 AM - 11:45 AM',
    notes: 'Pastoral report on Archdeaconry Church Planting mission in rural outstations.',
    status: 'confirmed',
    createdAt: '2026-11-11T14:15:00Z',
    adminNotes: 'Confirmed on the Bishop’s desk.'
  },
  {
    id: 'book-3',
    referenceId: 'PST-2026-1055',
    type: 'counseling',
    fullName: 'Dr. Obiora Nduka',
    phone: '+234 818 901 3344',
    email: 'obiora.nduka@gmail.com',
    category: 'Career & Purpose Direction',
    meetingMode: 'whatsapp_call',
    date: '2026-11-17',
    timeSlot: '11:00 AM - 11:45 AM', // Potential clash on same time slot!
    notes: 'Seeking the Bishop’s counsel on diaspora mission in the United Kingdom.',
    status: 'pending',
    createdAt: '2026-11-12T16:20:00Z',
    adminNotes: 'Conflict alert: 11:00 AM slot is reserved for Ven. Iloka. Suggest shifting Dr. Nduka to 01:15 PM slot.',
    clashDetected: true
  },
  {
    id: 'book-4',
    referenceId: 'INV-2026-3041',
    type: 'invitation',
    organizationName: 'St. Andrew’s Anglican Church, Otolo Nnewi',
    contactPerson: 'Ven. Patrick C. Eze',
    roleInOrg: 'Vicar & Archdeacon',
    phone: '+234 803 721 9900',
    email: 'standrews.otolo@gmail.com',
    eventTheme: 'Walking in the Light of His Glory',
    eventType: 'Anniversary',
    startDate: '2026-11-29',
    endDate: '2026-11-29',
    timeSlot: 'Morning Eucharist (09:00 AM)',
    venueCityState: 'St. Andrew’s Church Sanctuary, Otolo, Nnewi',
    expectedAttendance: '2,500+ Parishioners and Guests',
    honorariumAndLogisticsProvided: true,
    notes: 'Annual Harvest Thanksgiving, Dedication of Ultra-modern Parish Hall, and Episcopal Confirmation.',
    status: 'confirmed',
    createdAt: '2026-11-05T11:00:00Z',
    adminNotes: 'Confirmed on Diocesan Itinerary. Bishop’s Chaplain and protocol detail assigned.'
  },
  {
    id: 'book-5',
    referenceId: 'INV-2026-3088',
    type: 'invitation',
    organizationName: 'Diocese on the Niger, All Saints Cathedral, Onitsha',
    contactPerson: 'Ven. Dr. Samuel Chukwuma',
    roleInOrg: 'Sub-Dean, All Saints Cathedral',
    phone: '+234 803 555 9011',
    email: 'subdean@allsaintscathedralonitsha.org',
    eventTheme: 'The Heritage of Divine Power',
    eventType: 'Revival Service',
    startDate: '2026-12-04',
    endDate: '2026-12-06',
    timeSlot: 'Evening Sessions (05:00 PM Daily)',
    venueCityState: 'All Saints Cathedral Arena, Onitsha, Anambra State',
    expectedAttendance: '10,000+ Believers across Eastern Nigeria',
    honorariumAndLogisticsProvided: true,
    notes: 'Annual 3-day Regional Power Conference. Requesting Bishop Ndubuisi Obi as Guest Speaker.',
    status: 'pending',
    createdAt: '2026-11-12T08:00:00Z',
    adminNotes: 'Under review by Bishop Ndubuisi Obi.'
  }
];

export const INITIAL_ITINERARY: ItineraryItem[] = [
  {
    id: 'itin-1',
    title: 'Diocesan Confirmation & Holy Communion Service',
    date: '2026-11-15',
    time: '08:30 AM',
    location: 'Cathedral Church of St. Mary, Uruagu, Nnewi',
    type: 'Sunday Service',
    isPublic: true,
    description: 'Confirmation of 200+ candidates and Episcopal Holy Eucharist presided by the Lord Bishop.'
  },
  {
    id: 'itin-2',
    title: 'Episcopal Audiences & Pastoral Counseling',
    date: '2026-11-17',
    time: '10:00 AM – 03:00 PM',
    location: 'Bishopscourt, Anglican Diocese of Nnewi',
    type: 'Counseling Hours',
    isPublic: true,
    description: 'Pre-booked 1-on-1 pastoral and spiritual consultations with the Bishop.'
  },
  {
    id: 'itin-3',
    title: 'Diocesan Clergy School & Prayer Retreat',
    date: '2026-11-19',
    time: '09:00 AM – 02:00 PM',
    location: 'Diocesan Secretariat Conference Hall, Nnewi',
    type: 'Midweek Service',
    isPublic: true,
    description: 'Ministerial training, theological refinement, and intercession with all ordained priests.'
  },
  {
    id: 'itin-4',
    title: 'St. Andrew’s Otolo Parish Hall Dedication & Harvest',
    date: '2026-11-29',
    time: '09:00 AM – 01:00 PM',
    location: 'St. Andrew’s Church, Otolo Nnewi',
    type: 'Outreach & Speaking',
    isPublic: true,
    description: 'Episcopal dedication of completed parish complex and thanksgiving sermon.'
  },
  {
    id: 'itin-5',
    title: 'Standing Committee of the Church of Nigeria (Bishop Away)',
    date: '2026-12-10',
    endDate: '2026-12-14',
    time: 'All Day',
    location: 'Episcopal Synod & National Secretariat, Abuja',
    type: 'Pastoral Blocked',
    isPublic: false,
    description: 'Bishop Ndubuisi Obi attending national House of Bishops & Standing Committee in Abuja. Diary blocked.'
  }
];

export const AVAILABLE_COUNSELING_SLOTS = [
  '10:00 AM - 10:45 AM',
  '11:00 AM - 11:45 AM',
  '12:00 PM - 12:45 PM',
  '01:15 PM - 02:00 PM',
  '02:15 PM - 03:00 PM'
];
