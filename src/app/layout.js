import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Memory App Challenge',
  description: 'This application is part of a selection process for a job. This is a small application designed to demonstrate my skills and knowledge relevant to the position for which I am applying.',
}

export default function RootLayout({ children }) {

	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="container">

					<div className="row">
						<div className="col text-center m-4">
							<Image
								src="/memoLogo.png"
								width={260}
								height={107}
								alt="Memory Logo"
							/>
						</div>
					</div>

					{children}
				</div>
			</body>
		</html>
	)
}
