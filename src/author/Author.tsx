
import * as React from 'react'
export interface AuthorProps extends React.HTMLAttributes<HTMLDivElement> {
  uid: string
}

export interface ErrorResponse {
  message: string
  status: number
}

export interface AuthorResponse {
  createdAt: string
  firstName: string
  avatar: string
  lastName: string
  email: string
  id: string
  articleId: string
  message?: string
  status?: number

}

// export const fetchAuthor = React.useCallback(async (url: string) => {
//   try {
//     const response = await fetch(url)
//     const data = await response.json()
//     return data
//   } catch (e) {
//     console.error(e)
//   }
// },[])
export const fetcher = async (url: RequestInfo, options?: RequestInit): Promise<AuthorResponse | ErrorResponse | undefined> => {
  // https://62a34d865bd3609cee679aaa.mockapi.io/fitfab/v1/articles/1/authors
  try {
    const res = await fetch(url)
    if (res.ok) {
      const data = await res.json()
      return data
    } else {
      return {
        status: res.status,
        message: res.statusText
      }
    }
  } catch (error) {
    console.error(error)
  }
}

const Alert = ({ message, status }: { message: string, status: number }): JSX.Element => {
  return <div className=' border p-4 border-red-500 rounded '>Error <b>{status}</b>: {message !== '' ? message : 'Something went wrong'}</div>
}

const Avatar = ({ avatar }: { avatar: string }): JSX.Element => {
  return <img className='rounded-full w-24 h-24' src={avatar} alt='avatar' />
}

export const Author = ({ uid, ...props }: AuthorProps): JSX.Element => {
  const [content, setContent] = React.useState<any>({})
  const url = `https://reqres.in/api/users/${uid}/der`

  React.useEffect(() => {
    fetch(url)
      .then(res => {
        console.log('res: ', res)
        if (res.ok) {
          return res.json()
        } else {
          return {
            error: {
              status: res.status,
              message: res.statusText
            }
          }
        }
      })
      .then(data => {
        setContent(data)
      })
      .catch(error => {
        console.log('error: ', error)
      })
  }, [uid])
  console.log('author: ', content)
  return (
    <div className='flex flex-col items-center justify-center'>
      {content.error !== undefined ? <Alert message={content.error.message} status={content.error.status} /> : null}
      {content.data !== undefined ? <Avatar avatar={content.data.avatar} /> : null}
    </div>
  )
}
