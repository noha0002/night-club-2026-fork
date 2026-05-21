"use server";
const action2 = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  //   Tæller for BookForm
  const resname = formData.get("resname");
  const resemail = formData.get("email");
  const restable = formData.get("table-num");
  const resguests = formData.get("num-of-guest");
  const resnight = formData.get("choose-night");
  const rescontact = formData.get("contact-num");
  const rescomment = formData.get("comment");

  // BookForm

  if (!resname) {
    return { success: false, message: "Name is required" };
  }
  if (!resemail) {
    return { success: false, message: "Email is required" };
  }
  if (!restable) {
    return { success: false, message: "Table Number is required" };
  }
  if (!resguests) {
    return { success: false, message: "Number of Guests is required" };
  }
  if (!resnight) {
    return { success: false, message: "Please choose preferred night" };
  }
  if (!rescontact) {
    return { success: false, message: "Contact Number is required" };
  }

  try {
    const eventRes = await fetch(`http://localhost:4000/events/${parseInt(resnight)}`);
    const event = await eventRes.json();

    // HUSK AT ÆNDRE URL'EN
    const res = await fetch("http://localhost:4000/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: resname,
        email: resemail,
        table: restable,
        guests: resguests,
        date: event.date,
        phone: rescontact,
        eventId: parseInt(resnight),
        content: rescomment,
      }),
    });

    if (!res.ok) {
      return { success: false, message: "Failed to reserve event and/or table. Try Again" };
    }

    return { success: true, message: "Your event has been reserved" };
  } catch (error) {
    return { success: false, message: "An error occurred while reserving the event" };
  }
};

export default action2;
