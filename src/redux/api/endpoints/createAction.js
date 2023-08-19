import { api } from "../api";

export const actionApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    create: builder.mutation({
      query: (body) => ({
        url: "actions",
        method: "POST",
        body: { ...body },
      }),
    }),
  }),
});

export const { useCreateMutation } = actionApiSlice;
