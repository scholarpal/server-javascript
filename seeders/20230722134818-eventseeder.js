'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = [
      {
        "anchor": "Volunteer IDVolunteering Bogor",
        "title": "Volunteer IDVolunteering Bogor",
        "time": "April 17, 2020 April 17, 2020",
        "img": "https://idvolunteering.id/wp-content/uploads/2020/04/93217290_887174981753967_835467002634650738_n.jpg",
        "href": "https://idvolunteering.id/2020/04/17/volunteer-idvolunteering-bogor/",
        "category": "Volunteer"
      },
      {
        "anchor": "Volunteer Alzheimer Indonesia",
        "title": "Volunteer Alzheimer Indonesia",
        "time": "April 17, 2020 April 17, 2020",
        "img": "https://idvolunteering.id/wp-content/uploads/2020/04/93218185_148491226677008_1119055163858458470_n.jpg",
        "href": "https://idvolunteering.id/2020/04/17/volunteer-alzheimer-indonesia/",
        "category": "Volunteer"
      },
      {
        "anchor": "Pembahasan Try OUT TOPIK Cakap July 2023",
        "title": "Pembahasan Try OUT TOPIK Cakap July 2023",
        "time": "27 Jul 2023",
        "img": "https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230714210141_64b15545a7986.jpg",
        "href": "https://www.loket.com/event/pembahasan-try-out-topik-cakap-july-2023_Ub4g9",
        "category": "Event"
      },
      {
        "anchor": "Thu, Jul 27 · 10:30 AM UTC Jakarta Open Source Data Infrastructure Meetup - July 2023 Group name : Jakarta Open Source Data Infrastructure Meetup • Jakarta, ID Group name : Jakarta Open Source Data Infrastructure Meetup Jakarta, ID 35 attendees icon",
        "title": "Jakarta Open Source Data Infrastructure Meetup - July 2023",
        "time": "Thu, Jul 27 · 10:30 AM UTC",
        "img": "https://secure.meetupstatic.com/photos/event/8/5/9/1/event_514534193.webp?w=640",
        "href": "https://www.meetup.com/jakarta-open-source-data-infrastructure-meetup/events/294758762/",
        "category": "MeetUp"
      },
      {
        "anchor": "Wed, Jul 26 · 11:30 AM UTC #63 Ngoprek LLM dan GPT dengan OpenAI Group name : Jakarta Javascript User Group • Jakarta, ID Group name : Jakarta Javascript User Group Jakarta, ID 180 attendees icon",
        "title": "#63 Ngoprek LLM dan GPT dengan OpenAI",
        "time": "Wed, Jul 26 · 11:30 AM UTC",
        "img": "https://secure.meetupstatic.com/photos/event/3/f/b/e/event_514336318.webp?w=640",
        "href": "https://www.meetup.com/jakartajs/events/294609090/",
        "category": "MeetUp"
      },
      {
        "anchor": "Sat, Jul 22 · 7:00 AM UTC WPJKT MeetUp #40: Teknik Penulisan Content Marketing Group name : Jakarta WordPress Meetup • Jakarta, ID Group name : Jakarta WordPress Meetup Jakarta, ID 76 attendees icon",
        "title": "WPJKT MeetUp #40: Teknik Penulisan Content Marketing",
        "time": "Sat, Jul 22 · 7:00 AM UTC",
        "img": "https://secure.meetupstatic.com/photos/event/2/9/1/9/event_514390521.webp?w=640",
        "href": "https://www.meetup.com/jakarta-wordpress-meetup/events/294799811/",
        "category": "MeetUp"
      },
      {
        "anchor": "icon Online Event Thu, Jul 27 · 12:00 PM UTC OpenStack & OpenInfra Indonesia x Aliz - Online Meetup Group name : OpenStack & OpenInfra Indonesia User Group • Jakarta, ID Group name : OpenStack & OpenInfra Indonesia User Group Jakarta, ID 34 attendees icon Online Event icon",
        "title": "OpenStack & OpenInfra Indonesia x Aliz - Online Meetup",
        "time": "Thu, Jul 27 · 12:00 PM UTC",
        "img": "https://secure.meetupstatic.com/photos/event/3/b/3/6/event_514335158.webp?w=640",
        "href": "https://www.meetup.com/openinfraid/events/294740381/",
        "category": "MeetUp"
      },
      {
        "anchor": "Wed, Jul 26 · 12:00 PM UTC (Offline Event) DevOps Indonesia x i3 Group name : DevOps Indonesia • Jakarta, ID Group name : DevOps Indonesia Jakarta, ID 34 attendees icon",
        "title": "(Offline Event) DevOps Indonesia x i3",
        "time": "Wed, Jul 26 · 12:00 PM UTC",
        "img": "https://secure.meetupstatic.com/photos/event/c/1/b/8/event_514309592.webp?w=640",
        "href": "https://www.meetup.com/devops-indonesia/events/294716584/",
        "category": "MeetUp"
      },
      {
        "anchor": "icon Online Event Thu, Jul 27 · 5:30 PM UTC Live Chat with Meta Senior Product Manager Group name : Product School Jakarta • Jakarta, ID Group name : Product School Jakarta Jakarta, ID 11 attendees icon Online Event icon",
        "title": "Live Chat with Meta Senior Product Manager",
        "time": "Thu, Jul 27 · 5:30 PM UTC",
        "img": "https://secure.meetupstatic.com/photos/event/8/4/4/a/event_514053866.webp?w=640",
        "href": "https://www.meetup.com/ps-jakarta/events/294454937/",
        "category": "MeetUp"
      },
      {
        "anchor": "Tue, Jul 25 · 6:30 AM UTC ApsaraDB Forward - Alibaba Cloud Data Management Summit Group name : Jakarta Alibaba Cloud Meetup • Jakarta, ID Group name : Jakarta Alibaba Cloud Meetup Jakarta, ID 10 attendees icon",
        "title": "ApsaraDB Forward - Alibaba Cloud Data Management Summit",
        "time": "Tue, Jul 25 · 6:30 AM UTC",
        "img": "https://secure.meetupstatic.com/photos/event/3/9/4/6/event_514334662.webp?w=640",
        "href": "https://www.meetup.com/jakarta-alibaba-cloud-meetup/events/294739950/",
        "category": "MeetUp"
      },
      {
        "anchor": "icon Online Event Sun, Jul 23 · 7:00 AM UTC Virtual Hour of Web3 ETH Jakarta #1 Group name : Ethereum Jakarta • Jakarta, ID Group name : Ethereum Jakarta Jakarta, ID 5 attendees icon Online Event icon",
        "title": "Virtual Hour of Web3 ETH Jakarta #1",
        "time": "Sun, Jul 23 · 7:00 AM UTC",
        "img": "https://secure.meetupstatic.com/photos/event/c/d/1/f/event_514372511.webp?w=640",
        "href": "https://www.meetup.com/ethereum-jkt/events/294782364/",
        "category": "MeetUp"
      },
      {
        "anchor": "Tue, Jul 25 · 6:30 AM UTC ApsaraDB Data Management Summit 2023 Group name : Alibaba Cloud Community - Indonesia • Jakarta, ID Group name : Alibaba Cloud Community - Indonesia Jakarta, ID 3 attendees icon",
        "title": "ApsaraDB Data Management Summit 2023",
        "time": "Tue, Jul 25 · 6:30 AM UTC",
        "img": "https://secure.meetupstatic.com/photos/event/7/5/a/7/event_514350119.webp?w=640",
        "href": "https://www.meetup.com/alibaba-cloud-community-indonesia/events/294756507/",
        "category": "MeetUp"
      },
      {
        "anchor": "icon Online Event Fri, Jul 28 · 10:00 AM UTC Online Workshop: Data Science for Everyone Group name : Algoritma Data Science School • Jakarta, ID Group name : Algoritma Data Science School Jakarta, ID 1 attendee icon Online Event icon",
        "title": "Online Workshop: Data Science for Everyone",
        "time": "Fri, Jul 28 · 10:00 AM UTC",
        "img": "https://secure.meetupstatic.com/photos/event/2/9/d/a/event_514390714.webp?w=640",
        "href": "https://www.meetup.com/algoritma-data-science-center/events/294802361/",
        "category": "MeetUp"
      },
      {
        "anchor": "icon Online Event Sat, Jul 29 · 2:00 AM UTC Microsoft Ignite After Party with Mugi Purwokerto, Indonesia Group name : Microsoft User Group Indonesia (Mugi) Purwokerto • Purwokerto, ID Group name : Microsoft User Group Indonesia (Mugi) Purwokerto Purwokerto, ID 3 attendees icon Online Event icon",
        "title": "Microsoft Ignite After Party with Mugi Purwokerto, Indonesia",
        "time": "Sat, Jul 29 · 2:00 AM UTC",
        "img": "https://secure.meetupstatic.com/photos/event/a/c/c/c/event_499604236.webp?w=640",
        "href": "https://www.meetup.com/mugi-purwokerto/events/288276747/",
        "category": "MeetUp"
      },
      {
        "anchor": "Sat, Jul 22 · 5:00 AM UTC [ISQA Bandung] Cara Survive Di Dunia Kerja Sebagai QA Group name : Indonesia Software Quality Assurance • Jakarta, ID Group name : Indonesia Software Quality Assurance Jakarta, ID 20 attendees icon",
        "title": "[ISQA Bandung] Cara Survive Di Dunia Kerja Sebagai QA",
        "time": "Sat, Jul 22 · 5:00 AM UTC",
        "img": "https://secure.meetupstatic.com/photos/event/3/5/6/c/event_487453676.webp?w=640",
        "href": "https://www.meetup.com/indonesia-software-quality-assurance/events/294859201/",
        "category": "MeetUp"
      }
    ]
    data.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Events', data)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
