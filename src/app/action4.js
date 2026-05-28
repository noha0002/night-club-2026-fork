"use server";

const action4 = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const resemail = formData.get("email");

  if (!resemail) {
    return { success: false, message: "Email is required" };
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/newsletters`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: resemail,
          content: "Newsletter subscription",
          name: "Newsletter",
          date: new Date().toISOString(),
        }),
      },
    );

    if (!res.ok) {
      return { success: false, message: "Failed to subscribe. Try Again" };
    }

    return { success: true, message: "Subscribed successfully!" };
  } catch (error) {
    return { success: false, message: "An error occurred" };
  }
};

export default action4;
