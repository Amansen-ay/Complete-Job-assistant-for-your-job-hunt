import './notesPage.css'
import more from '../assets/more.svg'
import Import from '../assets/import.svg'
import plusBtn from '../assets/plusBtn.svg'
import templates from '../assets/templates.svg'
import { useState } from 'react'

import {
    PieChart,
    Pie,
    Cell,
    Tooltip
} from "recharts";

function AddnoteModal({ setShowModal, onSave }) {

    const [noteTitle, setNoteTitle] = useState("");
    const [category, setCategory] = useState("");
    const [notesCompany, setNotesCompany] = useState("");
    const [notesDescription, setNotesDescription] = useState("");

    function handelSave() {
        const note = {
            noteTitle: noteTitle,
            category: category,
            notesCompany: notesCompany,
            notesDescription: notesDescription,
            createdAt: new Date().toLocaleDateString()
        }

        onSave(note)
    }

    return (
        <>
            <div className="modal-overlay-notes-page">
                <div className="note-modal">

                    <div className="modal-header-notes-page">
                        <h2>Add New Note</h2>
                        <button className="close-btn-note-page" onClick={() => setShowModal(false)}>✕</button>
                    </div>

                    <div className="modal-body-notes-page">

                        <label>Title *</label>

                        <input
                            type="text"
                            placeholder="Google frontend interview"
                            value={noteTitle}
                            onChange={(e) => setNoteTitle(e.target.value)}
                        />

                        <label>Category *</label>
                        <select onChange={(e) => setCategory(e.target.value)} value={category}>
                            <option>Interview</option>
                            <option>General</option>
                            <option>Companies</option>
                            <option>Ideas</option>
                        </select>

                        <label>Company</label>
                        <input
                            type="text"
                            placeholder="Google"
                            value={notesCompany}
                            onChange={(e) => setNotesCompany(e.target.value)}
                        />

                        <label>Description *</label>
                        <textarea
                            rows="8"
                            placeholder="Write your note here..."
                            onChange={(e) => setNotesDescription(e.target.value)}
                            value={notesDescription}
                        ></textarea>

                    </div>

                    <div className="modal-footer-notes-page">
                        <button className="cancel-btn-notes-page" onClick={() => setShowModal(false)
                        }>
                            Cancel
                        </button>

                        <button className="save-btn-notes-page" onClick={handelSave}>
                            Save Note
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

const data = [

    { name: "Interviews", value: 6 },

    { name: "General", value: 4 },

    { name: "Ideas", value: 5 },

    { name: "Companies", value: 4 }

];

const COLORS = [

    "#7c3aed",
    "#6366f1",
    "#fbbf24",
    "#4ade80",
    "#f87171"

];

function Chart() {

    const total = data.reduce(
        (acc, item) => acc + item.value,
        0
    );

    return (

        <>
            <div className="entire-container-chart-notes-page">

                <header className="chartHeader-notes-page">
                    <h3>Application overview</h3>
                </header>

                <div className="chart-content">

                    <div className="chartWrapper-notes-page">
                        <div className="chartContainer">

                            <PieChart width={160} height={160} style={{ marginTop: "20px" }}>

                                <Pie
                                    data={data}
                                    innerRadius={40}
                                    outerRadius={60}
                                    dataKey="value"
                                >

                                    {
                                        data.map((entry, index) => (

                                            <Cell
                                                key={index}
                                                fill={COLORS[index]}
                                            />

                                        ))
                                    }

                                </Pie>

                                <Tooltip />

                            </PieChart>

                        </div>

                    </div>

                    <div className="legendContainer">

                        {
                            data.map((item, index) => (

                                <div
                                    key={index}
                                    className="legendItem"
                                >

                                    <div className="legendLeft">

                                        <span
                                            className="dot"
                                            style={{
                                                backgroundColor: COLORS[index]
                                            }}
                                        ></span>

                                        <p>{item.name}</p>

                                    </div>

                                    <span>

                                        {item.value}

                                    </span>

                                </div>

                            ))
                        }

                    </div>
                </div>





            </div>
        </>

    )
}




function NoteCard({ title, description, company, date, category}) {

    company = company ? company : "";
    
    

    return (
        <>
            <div className="note-card">
                <header>
                    <div>
                        <b>{title}</b>
                        <img src={more} onClick={()=>setShowMenu(prev=>!prev)} />
                       
                    </div>
                    <p>{category}</p>
                </header>
                <div className="note-description">
                    <p>{description}</p>
                </div>


                <div className="company-and-date">
                    <b>{company}</b>
                    <p>{date}</p>
                </div>

            </div>
        </>
    )
}

export default function NotesPage() {

    const [showModal, setShowModal] = useState(false);
    const [notesArr, setNotesArr] = useState(
        JSON.parse(localStorage.getItem("notes")) || []
    );

    const [showMenu, setShowMenu] = useState(false);

    function saveNote(note) {
        const updatedNotes = [...notesArr, note];

        setNotesArr(updatedNotes);

        localStorage.setItem("notes", JSON.stringify(updatedNotes));

        setShowModal(false)
    }

    return (
        <>
            {showModal && <AddnoteModal setShowModal={setShowModal} onSave={saveNote} setShowMenu={setShowMenu} />}
            <div className="notes-page-main-container">


                <div className="notes-container-left-part">

                    <header className="notes-page-header">
                        <h1>Notes</h1>
                        <p>Organize your thoughts, interview notes, and important information.</p>
                    </header>

                    <div className="header-section-all-btns">

                        <div className="filter-btns">
                            <button><b>All notes (18)</b></button>
                            <button><b>General (8)</b></button>
                            <button><b>Interview (6)</b></button>
                            <button><b>Companies (3)</b></button>
                            <button><b>Ideas (10)</b></button>
                        </div>

                        <button className="add-new-note-btn" onClick={() => setShowModal(prev => !prev)}>+ New note</button>

                    </div>
                    <div className="notes-card-container">
                        {notesArr.map((obj, index) => {
                            return (
                                <>
                                    <NoteCard key={index} title={obj.noteTitle} description={obj.notesDescription} category={obj.category} company={obj.notesCompany} date={obj.createdAt} />
                                </>

                            )
                        })}

                    </div>



                </div>

                <div className="notes-page-right-part">
                    <Chart />
                    <div className="recent-notes-container">
                        <header>
                            <b>Recent notes</b>
                            <p>View all</p>
                        </header>

                        <table>
                            <tbody>
                                <tr>
                                    <td>

                                    </td>
                                    <td>
                                        <b>Google frontend interview</b>
                                        <p>Interview</p>
                                    </td>
                                    <td>20 May</td>
                                </tr>

                                <tr>
                                    <td>

                                    </td>
                                    <td>
                                        <b>Google frontend interview</b>
                                        <p>Interview</p>
                                    </td>
                                    <td>20 May</td>
                                </tr>

                                <tr>
                                    <td>

                                    </td>
                                    <td>
                                        <b>Google frontend interview</b>
                                        <p>Interview</p>
                                    </td>
                                    <td>20 May</td>
                                </tr>

                                <tr>
                                    <td>

                                    </td>
                                    <td>
                                        <b>Google frontend interview</b>
                                        <p>Interview</p>
                                    </td>
                                    <td>20 May</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <div className="quick-actions-container">
                        <header>
                            <b>Quick actions</b>
                        </header>
                        <div className="actions">
                            <div>
                                <img src={plusBtn} />
                                <p>New note</p>
                            </div>
                            <div>
                                <img src={Import} />
                                <p>Import from Applications</p>
                            </div>

                            <div>
                                <img src={templates} />
                                <p>Templates</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}