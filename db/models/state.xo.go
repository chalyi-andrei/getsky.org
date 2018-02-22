// Package models contains the types for schema 'getskytrade'.
package models

// Code generated by xo. DO NOT EDIT.

import (
	"errors"
)

// State represents a row from 'getskytrade.States'.
type State struct {
	Code string `json:"Code"` // Code
	Name string `json:"Name"` // Name

	// xo fields
	_exists, _deleted bool
}

// Exists determines if the State exists in the database.
func (s *State) Exists() bool {
	return s._exists
}

// Deleted provides information if the State has been deleted from the database.
func (s *State) Deleted() bool {
	return s._deleted
}

// Insert inserts the State to the database.
func (s *State) Insert(db XODB) error {
	var err error

	// if already exist, bail
	if s._exists {
		return errors.New("insert failed: already exists")
	}

	// sql insert query, primary key must be provided
	const sqlstr = `INSERT INTO getskytrade.States (` +
		`Code, Name` +
		`) VALUES (` +
		`?, ?` +
		`)`

	// run query
	XOLog(sqlstr, s.Code, s.Name)
	_, err = db.Exec(sqlstr, s.Code, s.Name)
	if err != nil {
		return err
	}

	// set existence
	s._exists = true

	return nil
}

// Update updates the State in the database.
func (s *State) Update(db XODB) error {
	var err error

	// if doesn't exist, bail
	if !s._exists {
		return errors.New("update failed: does not exist")
	}

	// if deleted, bail
	if s._deleted {
		return errors.New("update failed: marked for deletion")
	}

	// sql query
	const sqlstr = `UPDATE getskytrade.States SET ` +
		`Name = ?` +
		` WHERE Code = ?`

	// run query
	XOLog(sqlstr, s.Name, s.Code)
	_, err = db.Exec(sqlstr, s.Name, s.Code)
	return err
}

// Save saves the State to the database.
func (s *State) Save(db XODB) error {
	if s.Exists() {
		return s.Update(db)
	}

	return s.Insert(db)
}

// Delete deletes the State from the database.
func (s *State) Delete(db XODB) error {
	var err error

	// if doesn't exist, bail
	if !s._exists {
		return nil
	}

	// if deleted, bail
	if s._deleted {
		return nil
	}

	// sql query
	const sqlstr = `DELETE FROM getskytrade.States WHERE Code = ?`

	// run query
	XOLog(sqlstr, s.Code)
	_, err = db.Exec(sqlstr, s.Code)
	if err != nil {
		return err
	}

	// set deleted
	s._deleted = true

	return nil
}

// StateByCode retrieves a row from 'getskytrade.States' as a State.
//
// Generated from index 'Code'.
func StateByCode(db XODB, code string) (*State, error) {
	var err error

	// sql query
	const sqlstr = `SELECT ` +
		`Code, Name ` +
		`FROM getskytrade.States ` +
		`WHERE Code = ?`

	// run query
	XOLog(sqlstr, code)
	s := State{
		_exists: true,
	}

	err = db.QueryRow(sqlstr, code).Scan(&s.Code, &s.Name)
	if err != nil {
		return nil, err
	}

	return &s, nil
}

// StateByCode retrieves a row from 'getskytrade.States' as a State.
//
// Generated from index 'States_Code_pkey'.
func StateByCode(db XODB, code string) (*State, error) {
	var err error

	// sql query
	const sqlstr = `SELECT ` +
		`Code, Name ` +
		`FROM getskytrade.States ` +
		`WHERE Code = ?`

	// run query
	XOLog(sqlstr, code)
	s := State{
		_exists: true,
	}

	err = db.QueryRow(sqlstr, code).Scan(&s.Code, &s.Name)
	if err != nil {
		return nil, err
	}

	return &s, nil
}
