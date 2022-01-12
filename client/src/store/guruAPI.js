import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const guruApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: '/api',
	}),
	tagTypes: ['User', 'Course', 'Comment'],
	endpoints: (builder) => ({
		courses: builder.query({
			query: () => '/courses',
			providesTags: ['Course', 'Comment'],
		}),
		course: builder.query({
			query: (id) => `/courses/${id}`,
			providesTags: ['Course', 'Comment'],
		}),
		currentUser: builder.query({
			query: () => '/me',
			providesTags: ['User'],
		}),
		login: builder.mutation({
			query: (login) => ({
				url: '/login',
				method: 'POST',
				body: login,
			}),
			invalidatesTags: ['User'],
		}),
		signup: builder.mutation({
			query: (signup) => ({
				url: '/signup',
				method: 'POST',
				body: signup,
			}),
			invalidatesTags: ['User'],
		}),
		logout: builder.mutation({
			query: () => ({
				url: '/logout',
				method: 'DELETE',
			}),
			invalidatesTags: ['User'],
		}),
		enrollments: builder.query({
			query: () => ({
				url: '/enrollments',
				providesTags: ['User', 'Course'],
			}),
		}),
		addEnrollment: builder.mutation({
			query: (enrollment) => ({
				url: '/enrollments',
				method: 'POST',
				body: enrollment,
			}),
			invalidatesTags: ['Course', 'User'],
		}),
		deleteEnrollment: builder.mutation({
			query: (id) => ({
				url: `/enrollments/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Course', 'User'],
		}),
	}),
});

export const {
	useCoursesQuery,
	useCourseQuery,
	useCurrentUserQuery,
	useSignupMutation,
	useLoginMutation,
	useLogoutMutation,
	useAddEnrollmentMutation,
	useDeleteEnrollmentMutation,
} = guruApi;
