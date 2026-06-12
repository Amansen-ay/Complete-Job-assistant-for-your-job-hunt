import './notesPage.css'
import more from '../assets/more.svg'
import Import from '../assets/import.svg'
import plusBtn from '../assets/plusBtn.svg'
import templates from '../assets/templates.svg'
import emptyNotesImg from '../assets/bookNew.png'
import donut from '../assets/donut.svg'
import { useState } from 'react'

import {
    PieChart,
    Pie,
    Cell,
    Tooltip
} from "recharts";

function AddnoteModal({ setShowModal, onSave, editingNote, editIndex }) {

    const [noteTitle, setNoteTitle] = useState(editingNote?.noteTitle || "");
    const [category, setCategory] = useState(editingNote?.category || "");
    const [notesCompany, setNotesCompany] = useState(editingNote?.notesCompany || "");
    const [notesDescription, setNotesDescription] = useState(editingNote?.notesDescription || "");

    function handelSave() {
        const note = {
            noteTitle: noteTitle,
            category: category,
            notesCompany: notesCompany,
            notesDescription: notesDescription,
            createdAt: editingNote?.createdAt || new Date().toLocaleDateString()
        }

        onSave(note, editIndex)
    }

    return (
        <>
            <div className="modal-overlay-notes-page">
                <div className="note-modal">

                    <div className="modal-header-notes-page">
                        <h2>{editingNote ? "Edit Note" : "Add New Note"}</h2>
                        <button className="close-btn-note-page" onClick={() => setShowModal(false)}>✕</button>
                    </div>

                    <div className="modal-body-notes-page">

                        <label>Title *</label>

                        <input
                            type="text"
                            placeholder="Google frontend interview"
                            value={noteTitle}
                            maxLength={30}
                            onChange={(e) => setNoteTitle(e.target.value)}
                        />

                        <label>Category *</label>
                        <select onChange={(e) => setCategory(e.target.value)} value={category}>
                            <option>Select category</option>
                            <option value="Interview">Interview</option>
                            <option value="General">General</option>
                            <option value="Companies">Companies</option>
                            <option value="Ideas">Ideas</option>
                            
                        </select>

                        <label>Company</label>
                        <input
                            type="text"
                            placeholder="Google"
                            value={notesCompany}
                            maxLength={20}
                            onChange={(e) => setNotesCompany(e.target.value)}
                        />

                        <label>Description *</label>
                        <textarea
                            rows="8"
                            placeholder="Write your note here..."
                            onChange={(e) => setNotesDescription(e.target.value)}
                            maxLength={300}
                            value={notesDescription}
                        ></textarea>

                    </div>

                    <div className="modal-footer-notes-page">
                        <button className="cancel-btn-notes-page" onClick={() => setShowModal(false)
                        }>
                            Cancel
                        </button>

                        <button className="save-btn-notes-page" onClick={handelSave}>
                            {editingNote ? "Update Note" : "Save Note"}
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

function ViewNoteModal({ setShowViewModal, viewingNote }) {
    return (
        <>
            <div className="modal-overlay-notes-page">
                <div className="note-modal view-note-modal">

                    <div className="modal-header-notes-page">
                        <h2>View Note</h2>
                        <button className="close-btn-note-page" onClick={() => setShowViewModal(false)}>✕</button>
                    </div>

                    <div className="modal-body-view-notes">

                        <div className="view-field">
                            <label>Title</label>
                            <p className="view-content">{viewingNote?.noteTitle}</p>
                        </div>

                        <div className="view-field">
                            <label>Category</label>
                            <span className="category-badge">{viewingNote?.category}</span>
                        </div>

                        <div className="view-field">
                            <label>Company</label>
                            <p className="view-content">{viewingNote?.notesCompany || "N/A"}</p>
                        </div>

                        <div className="view-field">
                            <label>Description</label>
                            <p className="view-content view-description">{viewingNote?.notesDescription}</p>
                        </div>

                        <div className="view-field">
                            <label>Created Date</label>
                            <p className="view-content">{viewingNote?.createdAt}</p>
                        </div>

                    </div>

                    <div className="modal-footer-notes-page">
                        <button className="close-view-btn-notes-page" onClick={() => setShowViewModal(false)}>
                            Close
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

const COLORS = [

    "#7c3aed",
    "#6366f1",
    "#fbbf24",
    "#4ade80",
    "#f87171"

];

function EmptyNotesPlaceholder({ onCreateClick }) {
    return (
        <div className="empty-notes-placeholder">
            <img src={emptyNotesImg} alt="Empty notes" className="placeholder-image" />
            <h2>Your notes are waiting</h2>
            <p>Capture your thoughts, prepare for interviews, and keep important information organized in one place.</p>
            <button className="create-first-note-btn" onClick={onCreateClick}>
                + Create your first note
            </button>
        </div>
    )
}

function EmptyRecentNotesPlaceholder() {
    return (
        <div className="empty-recent-notes-placeholder">
            <div className="placeholder-icon-small">📄</div>
            <h3>No recent notes</h3>
            <p>When you add notes, they will appear here for quick access.</p>
        </div>
    )
}

function Chart({ notesArr }) {

    const getCategoryData = () => {
        const categories = {
            "Interview": 0,
            "General": 0,
            "Companies": 0,
            "Ideas": 0
        };

        notesArr.forEach(note => {
            if (categories.hasOwnProperty(note.category)) {
                categories[note.category]++;
            }
        });

        return Object.entries(categories).map(([name, value]) => ({
            name,
            value
        }));
    };

    const data = getCategoryData();
    const total = data.reduce(
        (acc, item) => acc + item.value,
        0
    );

    return (

        <>
        { notesArr.length>0?

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
            :
             <div className="donut-chart-empty-placeholder-notes-page">
                <img src={donut} width="50px" height="50px" />
                <h3>No notes yet</h3>
            <p>Add your first note to refine your plans.</p>
            </div>
        }
           
        </>

    )
}




function NoteCard({ title, description, company, date, category, index, onDelete, onEdit, onView }) {

    company = company ? company : "";
    const [showMenu, setShowMenu] = useState(false);
    
    return (
        <>
            <div className="note-card">
                <header>
                    <div>
                        <b>{title}</b>
                        <div className="menu-wrapper">
                            <img src={more} onClick={() => setShowMenu(prev => !prev)} className="three-dots-btn" />
                            {showMenu && (
                                <div className="dropdown-menu">
                                    <button onClick={() => {
                                        onView(index);
                                        setShowMenu(false);
                                    }}>
                                        View
                                    </button>
                                    <button onClick={() => {
                                        onEdit(index);
                                        setShowMenu(false);
                                    }}>
                                        Edit
                                    </button>
                                    <button onClick={() => {
                                        onDelete(index);
                                        setShowMenu(false);
                                    }}>
                                        Delete
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <p>{category}</p>
                </header>
                <div className="note-description-container">
                    <div className="note-description">
                    <p>{description}</p>
                    </div>

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
    const [editingNote, setEditingNote] = useState(null);
    const [editIndex, setEditIndex] = useState(null);
    const [showViewModal, setShowViewModal] = useState(false);
    const [viewingNote, setViewingNote] = useState(null);

    function saveNote(note, index) {
        let updatedNotes;
        
        if (index !== null && index !== undefined) {
            // Edit existing note
            updatedNotes = [...notesArr];
            updatedNotes[index] = note;
        } else {
            // Add new note
            updatedNotes = [...notesArr, note];
        }

        setNotesArr(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
        setShowModal(false);
        setEditingNote(null);
        setEditIndex(null);
    }

    function deleteNote(index) {
        const updatedNotes = notesArr.filter((_, i) => i !== index);
        setNotesArr(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
    }

    function handleEditNote(index) {
        setEditingNote(notesArr[index]);
        setEditIndex(index);
        setShowModal(true);
    }

    function handleViewNote(index) {
        setViewingNote(notesArr[index]);
        setShowViewModal(true);
    }

    return (
        <>
            {showModal && <AddnoteModal setShowModal={setShowModal} onSave={saveNote} editingNote={editingNote} editIndex={editIndex} />}
            {showViewModal && <ViewNoteModal setShowViewModal={setShowViewModal} viewingNote={viewingNote} />}
            <div className="notes-page-main-container">


                <div className="notes-container-left-part">

                    <header className="notes-page-header">
                        <h1>Notes</h1>
                        <p>Organize your thoughts, interview notes, and important information.</p>
                    </header>

                    <div className="header-section-all-btns">

                        <div className="filter-btns">
                            <button><b>All notes ({notesArr.length})</b></button>
                            <button><b>General ({notesArr.filter(n => n.category === "General").length})</b></button>
                            <button><b>Interview ({notesArr.filter(n => n.category === "Interview").length})</b></button>
                            <button><b>Companies ({notesArr.filter(n => n.category === "Companies").length})</b></button>
                            <button><b>Ideas ({notesArr.filter(n => n.category === "Ideas").length})</b></button>
                        </div>

                        <button className="add-new-note-btn" onClick={() => {
                            setEditingNote(null);
                            setEditIndex(null);
                            setShowModal(prev => !prev);
                        }}>+ New note</button>

                    </div>
                    {notesArr.length === 0 ? (
                        <EmptyNotesPlaceholder onCreateClick={() => {
                            setEditingNote(null);
                            setEditIndex(null);
                            setShowModal(true);
                        }} />
                    ) : (
                        <div className="notes-card-container">
                            {notesArr.map((obj, index) => {
                                return (
                                    <>
                                        <NoteCard key={index} title={obj.noteTitle} description={obj.notesDescription} category={obj.category} company={obj.notesCompany} date={obj.createdAt} index={index} onDelete={deleteNote} onEdit={handleEditNote} onView={handleViewNote} />
                                    </>

                                )
                            })}

                        </div>
                    )}



                </div>

                <div className="notes-page-right-part">
          
                 <Chart notesArr={notesArr} />
 
                    <div className="recent-notes-container">
                        <header>
                            <b>Recent notes</b>
                            <p>View all</p>
                        </header>

                        {notesArr.length === 0 ? (
                            <EmptyRecentNotesPlaceholder />
                        ) : (
                            <table>
                                <tbody>
                                    {notesArr.slice(-4).reverse().map((note, index) => (
                                        <tr key={index}>
                                            <td>
                                                <b>{note.noteTitle}</b>
                                                <p>{note.category}</p>
                                            </td>
                                            <td>{note.createdAt}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
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