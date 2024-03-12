import { Resend } from "resend";

const resend = new Resend("re_gepbrDhT_DvA2pcyqJ9shrHqGECH43fM1");

export async function sendEmail(useremail : string){
  const { data, error } = await resend.emails.send({
    from: 'StockTrading <onboarding@resend.dev>',
    to: [`${useremail}`],
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
  });
  if (error) {
    return console.error({ error });
  }
  console.log({ data });
  return {data}
}

//sendEmail("mukherjee4004@gmail.com")