const doSomething = (ctx: { traceId?: string }) => {};

const doOtherSomething = (ctx: { traceId: string | undefined }) => {};

const ctx = {
  traceId: "trc_12345",
};

const ctx2 = {};

doSomething({}); // key optional

doOtherSomething({ traceId: undefined }); // value optional

doOtherSomething({ traceId: "trc_12345" }); // value optional
