export async function POST(req) {
  try {
    const { email } = await req.json();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400 });
    }
    // For now, just log the email. You can later connect to a DB or email service.
    console.log('Newsletter signup:', email);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
} 