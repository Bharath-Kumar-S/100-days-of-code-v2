const chargeCard = (payment: CreditCardPayment) => {};
const redirectToPaypal = (payment: PaypalPayment) => {};
const initiateBankTransfer = (payment: BankPayment) => {};

type Payment =
  | {
      method: "credit_card";
      cardNumber: string;
      cvv: string;
      expiry: string;
    }
  | {
      method: "paypal";
      email: string;
    }
  | {
      method: "bank_transfer";
      accountNumber: string;
      routingNumber: string;
    };

type CreditCardPayment = Extract<Payment, { method: "credit_card" }>;
type PaypalPayment = Extract<Payment, { method: "paypal" }>;
type BankPayment = Extract<Payment, { method: "bank_transfer" }>;

const processPayment = (payment: Payment) => {
  switch (payment.method) {
    case "credit_card":
      return chargeCard(payment);
    case "bank_transfer":
      return initiateBankTransfer(payment);
    case "paypal":
      return redirectToPaypal(payment);
    default:
      return assertNever(payment);
  }
};

const creditPayment: Payment = {
  method: "credit_card",
  cardNumber: "550634561234",
  cvv: "1234",
  expiry: "27/01",
};

const payPalPayment: Payment = {
  method: "paypal",
  email: "bharath@xyz.ee",
};

const bankPayment: Payment = {
  method: "bank_transfer",
  accountNumber: "77765298435875645",
  routingNumber: "4545234",
};

const assertNever = (x: never): never => {
  throw new Error("Unhandled payment method");
};

processPayment(creditPayment);
processPayment(payPalPayment);
processPayment(bankPayment);
