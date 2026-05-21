"use server";
const action3 = async (eventId, prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  //   Tæller for ContactForm
  const resname = formData.get("name");
  const resemail = formData.get("email");
  const rescomment = formData.get("comment");

  // Valideringer
  if (!resname) {
    return { success: false, message: "Name is required" };
  }
  //   if (!resemail) {
  //     return { success: false, message: "Email is required" };
  //   }
  if (!rescomment) {
    return { success: false, message: "Comment is required" };
  }

  try {
    // HUSK AT ÆNDRE URL'EN
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventId: parseInt(eventId),
        name: resname,
        // email: resemail,
        content: rescomment,
        date: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      return { success: false, message: "Failed to submit comment. Try Again" };
    }

    return { success: true, message: "Comment submitted successfully" };
  } catch (error) {
    return { success: false, message: "An error occurred while submitting the comment" };
  }
};

export default action3;
