import { api } from "../api";

export const authApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "self/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    self: builder.mutation({
      query: () => ({
        url: "self/",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useSelfMutation } = authApiSlice;
