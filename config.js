/* DIGITAL RECEPTIONIST — CUSTOMER CONFIGURATION
   Edit this file for each customer. The app files should not need editing. */
window.RECEPTION_CONFIG = {
  businessName: "Ardee Physio Clinic",
  shortName: "Ardee Physio",
  theme: { primary: "#0877b9", dark: "#10243a", background: "#f5fbff" },
  welcomeImage: "welcome-screen.png",
  idleSeconds: 90,

  contact: {
    phone: "01234 567890",
    email: "hello@example-physio.ie",
    whatsapp: "",
    website: "https://example.com"
  },

  booking: {
    url: "https://example.com/book",
    phoneFirstText: "For the quickest and most private way to book, scan the QR code with your phone.",
    allowOnIpad: true
  },

  hours: [
    ["Monday–Friday", "8:00am–7:00pm"],
    ["Saturday", "9:00am–1:00pm"],
    ["Sunday", "Closed"]
  ],

  services: [
    ["Initial Physiotherapy Assessment", "€65", "Assessment and treatment plan"],
    ["Follow-up Physiotherapy", "€55", "Ongoing treatment and rehabilitation"],
    ["Sports Injury Assessment", "€65", "Assessment for sports-related injuries"],
    ["Sports Massage", "€50", "Example service for demonstration"]
  ],

  arrivalInfo: [
    "Please arrive 5–10 minutes before your appointment.",
    "Wear comfortable clothing that allows the physiotherapist to assess the affected area.",
    "Bring any relevant referral letters or reports if you have them.",
    "If you are running late, please contact the clinic."
  ],

  quickQuestions: [
    "Do I need a referral?",
    "What should I wear?",
    "How long is an appointment?",
    "Do you accept health insurance?",
    "Where can I park?"
  ],

  qa: [
    { keywords:["referral","doctor letter","gp letter"], answer:"For this demonstration clinic, you do not normally need a referral to book a physiotherapy appointment. Individual clinics can replace this with their own policy." },
    { keywords:["wear","clothes","clothing","what should i bring"], answer:"Wear comfortable clothing that allows the physiotherapist to assess the area being treated. Bring any relevant reports or referral letters if you have them." },
    { keywords:["how long","appointment length","duration"], answer:"A typical appointment in this demonstration is around 45 minutes. The clinic can customise this answer for each appointment type." },
    { keywords:["insurance","health insurance","vhi","laya","irish life"], answer:"Health-insurance cover varies by provider and policy. Please check your own plan or contact the clinic team for help with receipts and treatment details." },
    { keywords:["parking","park","car park"], answer:"Parking information can be customised for the clinic. For this demonstration, free customer parking is available outside the clinic." },
    { keywords:["cancel","cancellation","reschedule","change appointment"], answer:"To cancel or reschedule, please contact the clinic as early as possible. Each clinic can set its own cancellation policy here." },
    { keywords:["late","running late"], answer:"If you are running late, please contact the clinic team so they can advise you." },
    { keywords:["wheelchair","accessible","accessibility"], answer:"Accessibility information can be added here for each clinic. Please contact the team if you need specific assistance." },
    { keywords:["price","prices","cost","how much"], answer:"Choose Services & Prices from the main menu to see example treatment prices." },
    { keywords:["book","booking","appointment"], answer:"Choose Book an Appointment from the main menu. The QR code lets you continue privately on your own phone." },
    { keywords:["hours","open","close"], answer:"Choose Opening Hours from the main menu to see the clinic's example opening times." }
  ],

  safety: {
    privateInfoMessage: "Please don’t enter passwords, payment details, medical records or other private health information here.",
    medicalMessage: "This digital receptionist provides clinic information only and cannot diagnose symptoms or give personal medical advice. If you need clinical advice, please speak to a qualified healthcare professional. For a medical emergency, call 112 or 999."
  }
};
