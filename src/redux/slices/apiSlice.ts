import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import moment from 'moment'


// Define our single API slice object
export const apiSlice = createApi({
    // The cache reducer expects to be added at `state.api` (already default - this is optional)
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    // The "endpoints" represent operations and requests for this server
    endpoints: builder => ({
        musiciansBasic: builder.query({
            query: () => '/musicians',
            transformResponse: (response: DTO.MusicianDTO[]) => response.map(dto => {
                const entity: MusicianBasic = {
                    id: dto.id,
                    photoPath: dto.photoPath,
                    name: dto.name,
                    birth: moment(dto.birth, 'YYYY-MM-DD').toDate(),
                    death: moment(dto.death, 'YYYY-MM-DD').toDate(),
                    intro: dto.intro,
                    profileKey: dto.profileKey,
                }
                return entity
            }),
        })
    })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useMusiciansBasicQuery } = apiSlice