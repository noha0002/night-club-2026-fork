"use server";
const action = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // ContactForm
  const resname = formData.get("resname");
  const resemail = formData.get("email");
  const rescomment = formData.get("content");

  if (!resname) {
    return { success: false, message: "Name is required" };
  }
  if (!resemail) {
    return { success: false, message: "Email is required" };
  }
  if (!rescomment) {
    return { success: false, message: "Comment is required" };
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact_messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: resname,
        email: resemail,
        content: rescomment,
        date: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      return { success: false, message: "Failed to send form. Try Again" };
    }

    return { success: true, message: "Form sent successfully" };
  } catch (error) {
    return { success: false, message: "An error occurred while sending the form" };
  }
};

export default action;
