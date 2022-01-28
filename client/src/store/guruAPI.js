import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const guruApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: '/api',
	}),
	tagTypes: ['User', 'Course', 'Comment', 'Resource'],
	endpoints: (builder) => ({
		courses: builder.query({
			query: () => '/courses',
			providesTags: ['Course', 'Comment'],
		}),
		course: builder.query({
			query: (id) => `/courses/${id}`,
			providesTags: ['Course', 'Comment'],
		}),
		addCourse: builder.mutation({
			query: (course) => ({
				url: '/courses',
				method: 'POST',
				body: course,
			}),
			invalidatesTags: ['Course'],
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
		updateUser: builder.mutation({
			query: ({ id, ...rest }) => ({
				url: `/users/${id}`,
				method: 'PUT',
				body: rest,
			}),
			invalidatesTags: ['User'],
		}),
		deleteUser: builder.mutation({
			query: (id) => ({
				url: `/users/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['User', 'Comment', 'Course'],
		}),
		enrollments: builder.query({
			query: () => '/enrollments',
			providesTags: ['User', 'Course'],
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
		comments: builder.query({
			query: () => '/comments',
			providesTags: ['Comment'],
		}),
		addComment: builder.mutation({
			query: (comment) => ({
				url: '/comments',
				method: 'POST',
				body: comment,
			}),
			invalidatesTags: ['Comment'],
		}),
		updateComment: builder.mutation({
			query: ({ id, ...rest }) => ({
				url: `/comments/${id}`,
				method: 'PUT',
				body: rest,
			}),
			invalidatesTags: ['Comment'],
		}),
		deleteComment: builder.mutation({
			query: (id) => ({
				url: `/comments/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Comment'],
		}),
		extras: builder.query({
			query: () => '/extras',
			providesTags: ['Resource'],
		}),
		extra: builder.query({
			query: (id) => `/extras/${id}`,
			providesTags: ['Resource'],
		}),
		users: builder.query({
			query: () => '/users',
			providesTags: ['User'],
		}),
		addVideo: builder.mutation({
			query: (video) => ({
				url: '/videos',
				method: 'POST',
				body: video,
			}),
			invalidatesTags: ['Course'],
		}),
	}),
});

export const {
	useCoursesQuery,
	useCourseQuery,
	useAddCourseMutation,
	useCurrentUserQuery,
	useSignupMutation,
	useLoginMutation,
	useLogoutMutation,
	useUpdateUserMutation,
	useDeleteUserMutation,
	useAddEnrollmentMutation,
	useDeleteEnrollmentMutation,
	useCommentsQuery,
	useAddCommentMutation,
	useUpdateCommentMutation,
	useDeleteCommentMutation,
	useExtrasQuery,
	useExtraQuery,
	useUsersQuery,
	useEnrollmentsQuery,
	useAddVideoMutation,
} = guruApi;
