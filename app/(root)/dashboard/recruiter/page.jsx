import { Button } from "@/app/components/ui/button";
import { auth } from "@/auth";
import { BellIcon, BriefcaseBusiness, Globe2, Mail, User, VideoIcon } from "lucide-react";
import Image from "next/image";
import pfp from "@/app/assets/image.jpg";
import { Skeleton } from "@/app/components/ui/skeleton";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table";
import WorldMap from "@/app/components/WorldMap";
import Footer from "@/app/components/Footer";

const Recruiter = async () => {
          const session = await auth();
          const highlightedCountries = ["US", "IN", "DE"];

          return (
                    <>
                              <section className='w-full min-h-screen text-white font-poppins px-10'>
                                        <div className='flex justify-between items-center w-full'>
                                                  <div>
                                                            <h1 className='text-2xl font-semibold'>
                                                                      Hello, {session.user.name}
                                                            </h1>
                                                            <h1 className='text-sm font-medium text-gray-300'>
                                                                      Here&apos;s the current status for today
                                                            </h1>
                                                  </div>
                                                  <div className='w-1/4 justify-around flex items-center'>
                                                            <Button className='bg-white text-black rounded-xl hover:bg-black hover:text-white duration-200'>
                                                                      <BellIcon size={16} />
                                                                      Notifications
                                                            </Button>
                                                            <Button className='bg-white text-black rounded-xl hover:bg-black hover:text-white duration-200'>
                                                                      <Mail size={16} />
                                                                      Messages
                                                            </Button>
                                                  </div>
                                        </div>
                                        <div className='flex flex-col justify-center gap-4 rounded-xl bg-[#2a2a2a] p-4 my-5'>
                                                  <div className='flex items-center gap-2'>
                                                            <VideoIcon size={24} />
                                                            <h1 className='font-medium text-lg'>Upcoming Interview</h1>
                                                  </div>
                                                  <hr className='w-full flex justify-center items-center m-auto border-gray-500' />
                                                  <div className='flex justify-betweeen items-center w-full'>
                                                            <div className='flex items-center gap-5 w-3/4'>
                                                                      <Image
                                                                                alt='pfp'
                                                                                className='size-20 rounded-full'
                                                                                src={pfp}
                                                                      />
                                                                      <div className='flex flex-col justify-center'>
                                                                                <h1 className='text-lg font-bold'>
                                                                                          Sambit Singha
                                                                                </h1>
                                                                                <p className='text-sm font-medium text-gray-200'>
                                                                                          Front-end developer
                                                                                </p>
                                                                      </div>
                                                                      <div className='flex flex-col justify-center'>
                                                                                <h1 className='text-lg text-gray-300'>
                                                                                          Time
                                                                                </h1>
                                                                                <p className='text-sm font-bold'>
                                                                                          10:30 am - 11:30 am
                                                                                </p>
                                                                      </div>
                                                            </div>
                                                            <div className='flex justify-center items-center gap-5 w-1/4'>
                                                                      <Button className='bg-white text-black rounded-xl hover:bg-black hover:text-white duration-200'>
                                                                                View Details
                                                                      </Button>
                                                                      <Button className='bg-white text-black rounded-xl hover:bg-black hover:text-white duration-200'>
                                                                                Join Meeting
                                                                      </Button>
                                                            </div>
                                                  </div>
                                        </div>
                                        <div className='grid layout my-5'>
                                                  <div className='flex flex-col gap-4 rounded-xl bg-[#2a2a2a] p-4 h-auto'>
                                                            <div className='flex items-center gap-2'>
                                                                      <BriefcaseBusiness size={24} />
                                                                      <h1 className='font-medium text-lg'>
                                                                                Current Vacancies
                                                                      </h1>
                                                            </div>
                                                            <div className='grid grid-cols-2 gap-4'>
                                                                      <div className='flex justify-between items-center gap-4 rounded-xl border border-white py-2 px-4'>
                                                                                <h1 className='font-semibold text-sm'>
                                                                                          Marketing Specialist
                                                                                </h1>
                                                                                <div className='flex justify-center items-center gap-2'>
                                                                                          <User size={24} />
                                                                                          <h1 className='text-sm'>
                                                                                                    1/4 recruited
                                                                                          </h1>
                                                                                </div>
                                                                      </div>
                                                                      <div className='flex justify-between items-center gap-4 rounded-xl border border-white py-2 px-4'>
                                                                                <h1 className='font-semibold text-sm'>
                                                                                          Financial Analyst
                                                                                </h1>
                                                                                <div className='flex justify-center items-center gap-2'>
                                                                                          <User size={24} />
                                                                                          <h1 className='text-sm'>
                                                                                                    3/4 recruited
                                                                                          </h1>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                  </div>
                                                  <div className='flex flex-col gap-2 rounded-xl bg-[#2a2a2a] p-4 h-auto justify-center items-center'>
                                                            <Skeleton className='h-3 w-[250px] bg-gray-300' />
                                                            <Skeleton className='h-3 w-[200px] bg-gray-300' />
                                                  </div>
                                                  <div className='flex flex-col gap-4 rounded-xl bg-[#2a2a2a] p-4 h-auto'>
                                                            <div className='flex items-center gap-2'>
                                                                      <User size={24} />
                                                                      <h1 className='font-medium text-lg'>
                                                                                Potential Candidates
                                                                      </h1>
                                                            </div>
                                                            <Table>
                                                                      <TableHeader>
                                                                                <TableRow>
                                                                                          <TableHead className='w-40 text-white font-medium'>
                                                                                                    Name
                                                                                          </TableHead>
                                                                                          <TableHead className='text-white font-medium'>
                                                                                                    Location
                                                                                          </TableHead>
                                                                                          <TableHead className='text-white font-medium'>
                                                                                                    Preferred Job
                                                                                          </TableHead>
                                                                                          <TableHead className='text-right text-white font-medium'>
                                                                                                    Level
                                                                                          </TableHead>
                                                                                </TableRow>
                                                                      </TableHeader>
                                                                      <TableBody>
                                                                                <TableRow>
                                                                                          <TableCell className='font-medium flex items-center gap-2'>
                                                                                                    <Image
                                                                                                              alt='pfp'
                                                                                                              className='size-10 rounded-full object-cover'
                                                                                                              src={pfp}
                                                                                                    />
                                                                                                    INV001
                                                                                          </TableCell>
                                                                                          <TableCell>Kolkata</TableCell>
                                                                                          <TableCell>
                                                                                                    Full Stack Developer
                                                                                          </TableCell>
                                                                                          <TableCell className='text-right'>
                                                                                                    Entry Level
                                                                                          </TableCell>
                                                                                </TableRow>
                                                                                <TableRow>
                                                                                          <TableCell className='font-medium flex items-center gap-2'>
                                                                                                    <Image
                                                                                                              alt='pfp'
                                                                                                              className='size-10 rounded-full object-cover'
                                                                                                              src={pfp}
                                                                                                    />
                                                                                                    INV001
                                                                                          </TableCell>
                                                                                          <TableCell>Kolkata</TableCell>
                                                                                          <TableCell>
                                                                                                    Full Stack Developer
                                                                                          </TableCell>
                                                                                          <TableCell className='text-right'>
                                                                                                    Entry Level
                                                                                          </TableCell>
                                                                                </TableRow>
                                                                      </TableBody>
                                                            </Table>
                                                  </div>
                                                  <div className='flex flex-col gap-4 rounded-xl bg-[#2a2a2a] p-4 h-auto'>
                                                            <div className='flex items-center gap-2'>
                                                                      <Globe2 size={24} />
                                                                      <h1 className='font-medium text-lg'>
                                                                                Countries Insight
                                                                      </h1>
                                                            </div>
                                                            {/* <WorldMap highlightedCountries={highlightedCountries} /> */}
                                                  </div>
                                        </div>
                              </section>
                              <Footer />
                    </>
          );
};

export default Recruiter;
